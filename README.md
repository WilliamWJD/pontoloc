<h1 align="center">
  <img alt="PontoLoc" title="Pontoloc" src=".github/logo.png" width="300px" />
</h1>

<p align="center">Este software será utilizado para gerenciar os alugueis feitos pela empresa PontoLoc.</p>

<p align="center">
 <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#computer-desenvolvimento">Desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-contribuir">Como contribuir</a>
</p>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/)

## :computer: Desenvolvimento

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Backend

- Faça um clone desse repositório.
- Entre na pasta `cd server`
- Rode `cp .env.example .env` e preencha com SUAS variáveis ambiente.
- Rode `docker-compose up -d` para montar o ambiente.
- Rode `yarn sequelize db:create` para criar o banco de dados.
- Rode `yarn sequelize db:migrate` para executar as migrations.
- Rode `yarn dev` para iniciar o servidor.
- Importe o arquivo `Insomnia.json` desse repositório no Insomnia.

## 🤔 Como contribuir

- Faça um fork desse repositório.
- Cria uma branch com a sua feature: `git checkout -b minha-feature`
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`
- Faça push para a sua branch: `git push origin minha-feature`
