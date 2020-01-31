import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch, MdSentimentDissatisfied } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import FormHeader from '~/components/FormHeader';
import { InputWithIcon } from '~/components/Input';
import Message from '~/components/Message';

import { Container, Content, RegisterButton, ListClient } from './styles';

export default function Clients() {
	const [clients, setClients] = useState([]);
	const [loading, setLoading] = useState(false);

	async function loadClients() {
		try {
			setLoading(true);
			const response = await api.get('clients');

			setLoading(false);
			setClients(response.data);
		} catch (error) {
			toast.error('Servidor indisponível no momento!');
		}
		setLoading(false);
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
					<RegisterButton
						title="CADASTRAR"
						Icon={MdAdd}
						action={() => history.push('/clients/register')}
					/>
					<InputWithIcon
						placeholder="Buscar cliente"
						Icon={MdSearch}
						onChange={handleSearchName}
					/>
				</FormHeader>

				{loading ? (
					<Message loading />
				) : (
					<>
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
								loading={false}
								Icon={MdSentimentDissatisfied}
								color="#ee4d64"
								title="NADA ENCONTRADO!"
							/>
						)}
					</>
				)}
			</Content>
		</Container>
	);
}
