import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch, MdSentimentDissatisfied } from 'react-icons/md';
import { toast } from 'react-toastify';

import { parseISO, format } from 'date-fns';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import { InputWithIcon } from '~/components/Input';
import ListingContract from '~/components/Listing';
import Message from '~/components/Message';
import { formatPrice } from '~/util/format';

import Modal from './Modal';
import { Container, Content, RegisterButton } from './styles';

export default function Contracts() {
	const [contracts, setContracts] = useState([]);
	const [loading, setLoading] = useState(false);

	async function loadContracts() {
		try {
			setLoading(true);
			const response = await api.get('/contracts');

			const data = response.data.map(contract => ({
				...contract,
				dateFormated: format(parseISO(contract.createdAt), 'dd/MM/yyyy'),
				priceFormated: formatPrice(contract.price_total_day),
			}));

			setContracts(data);
		} catch (error) {
			toast.error('Servidor indisponível no momento!');
		}
		setLoading(false);
	}

	useEffect(() => {
		loadContracts();
	}, []);

	function handleSearchName(e) {
		if (e.target.value !== '') {
			const contractsSearchName = contracts.filter(contract =>
				contract.client.name.includes(e.target.value)
			);
			setContracts(contractsSearchName);
			return;
		}
		loadContracts();
	}

	return (
		<Container>
			<Content>
				<FormHeader title="Gerenciando alugueis">
					<RegisterButton title="CADASTRAR" Icon={MdAdd} action={() => {}} />
					<InputWithIcon
						placeholder="Buscar locatário"
						Icon={MdSearch}
						onChange={handleSearchName}
					/>
				</FormHeader>

				{loading ? (
					<Message loading />
				) : (
					<>
						{contracts.length !== 0 ? (
							<ListingContract>
								<section>
									<strong>NOME</strong>
									<strong>DATA DE RETIRADA</strong>
									<strong>DIÁRIA</strong>
								</section>
								{contracts?.map(contract => (
									<div key={contract?.id}>
										<small>{contract?.client.name}</small>
										<small>{contract?.dateFormated}</small>
										<small>{contract?.priceFormated}</small>
										<Modal ContractId={contract?.id} />
									</div>
								))}
							</ListingContract>
						) : (
							<Message
								Icon={MdSentimentDissatisfied}
								loading={false}
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
