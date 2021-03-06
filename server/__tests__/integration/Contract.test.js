import request from 'supertest';

import app from '../../src/app';
import factory from '../factories';
import truncate from '../util/truncate';

describe('Contract', () => {
  beforeEach(async () => {
    await truncate();
  });

  describe('Create', () => {
    it('should be able to register a contract', async () => {
      const client = await factory.attrs('Client');

      const { body } = await request(app)
        .post('/clients')
        .send(client);

      const response = await request(app)
        .post('/contracts')
        .send({
          client_id: body.id,
          delivery_price: 0,
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });

    it('should not be able to register a contract with invalid data', async () => {
      const response = await request(app)
        .post('/contracts')
        .send();

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Validation fails');
    });

    it('should not be able to register a contract with invalid client id', async () => {
      const response = await request(app)
        .post('/contracts')
        .send({ client_id: 1, delivery_price: 0 });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Client does not exists');
    });
  });

  describe('List', () => {
    it('should be able to have a contract list', async () => {
      const client = await factory.attrs('Client');

      const { body } = await request(app)
        .post('/clients')
        .send(client);

      await request(app)
        .post('/contracts')
        .send({
          client_id: body.id,
          delivery_price: 0,
        });

      await request(app)
        .post('/contracts')
        .send({
          client_id: body.id,
          delivery_price: 0,
        });

      const response = await request(app).get('/contracts');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        expect.objectContaining({
          price_total_day: 0,
          returned_at: null,
          client: {
            id: body.id,
            name: client.name,
          },
        }),
        expect.objectContaining({
          price_total_day: 0,
          returned_at: null,
          client: {
            id: body.id,
            name: client.name,
          },
        }),
      ]);
    });

    it('should be able to have information about one contract', async () => {
      const client = await factory.attrs('Client');

      const { body } = await request(app)
        .post('/clients')
        .send(client);

      const {
        body: { id },
      } = await request(app)
        .post('/contracts')
        .send({
          client_id: body.id,
          delivery_price: 0,
        });

      const response = await request(app).get(`/contracts/${id}`);

      expect(response.body).toEqual(
        expect.objectContaining({
          price_total_day: 0,
          returned_at: null,
          client: {
            id: body.id,
            name: client.name,
            cpf: client.cpf,
            telefone: client.telefone,
            endereco: client.endereco,
          },
          items: [],
        })
      );
    });
  });

  describe('Update', () => {
    it('should be able to edit a contract with returned_at or collet_price', async () => {
      const client = await factory.attrs('Client');

      const { body } = await request(app)
        .post('/clients')
        .send(client);

      const {
        body: { id },
      } = await request(app)
        .post('/contracts')
        .send({
          client_id: body.id,
          delivery_price: 0,
        });

      const response = await request(app)
        .put(`/contracts/${id}`)
        .send({ returned_at: new Date(), collet_price: 50, final_price: 0 });

      expect(response.status).toBe(200);
    });

    it('should not be able to edit a contract with invalid data', async () => {
      const response = await request(app)
        .put(`/contracts/${1}`)
        .send({ returned_at: new Date(), collet_price: 50 });

      expect(response.status).toBe(400);
    });

    it('should not be able to edit a contract with invalid id', async () => {
      const response = await request(app)
        .put(`/contracts/${1}`)
        .send({ returned_at: new Date(), collet_price: 50, final_price: 0 });

      expect(response.status).toBe(400);
    });
  });
});
