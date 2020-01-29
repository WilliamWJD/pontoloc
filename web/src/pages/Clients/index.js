import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch, MdSentimentDissatisfied } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import Input from '~/components/Input';
import Message from '~/components/Message';

import { Container, Content, RegisterButton, ListClient } from './styles';

export default function Clients() {
	const [clients, setClients] = useState([]);

	async function loadClients() {
		const response = await api.get('clients');

		setClients(response.data);
	}

	function handleSearchName(e) {
		if (e.target.value !== '') {
			const contractsSearchName = clients.filter(client =>
				client.name.includes(e.target.value)
			);
			setClients(contractsSearchName);
			return;
		}
		loadClients();
	}

	useEffect(() => {
		loadClients();
	}, []);

	return (
		<Container>
			<Content>
				<FormHeader title="Gerenciando clientes">
					<div>
						<RegisterButton title="CADASTRAR" Icon={MdAdd} action={() => {}} />
						<Input
							placeholder="Buscar cliente"
							Icon={MdSearch}
							onChange={handleSearchName}
						/>
					</div>
				</FormHeader>

				{clients.length !== 0 ? (
					<ListClient>
						<section>
							<strong>NOME</strong>
							<strong>CPF</strong>
							<strong>TELEFONE</strong>
						</section>
						{clients.map(client => (
							<div key={client.id}>
								<small>{client.name}</small>
								<small>{client.cpf}</small>
								<small>{client.telefone}</small>
								<Link to="/clients">editar</Link>
							</div>
						))}
					</ListClient>
				) : (
					<Message
						Icon={MdSentimentDissatisfied}
						color="#ee4d64"
						title="NADA ENCONTRADO!"
					/>
				)}
			</Content>
		</Container>
	);
}
