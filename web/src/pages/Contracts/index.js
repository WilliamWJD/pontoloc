import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch, MdSentimentDissatisfied } from 'react-icons/md';

import { parseISO, format } from 'date-fns';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import Input from '~/components/Input';
import ListingContract from '~/components/Listing';
import Message from '~/components/Message';
import { formatPrice } from '~/util/format';

import Modal from './Modal';
import { Container, Content, RegisterButton } from './styles';

export default function Contracts() {
	const [contracts, setContracts] = useState([]);
	const [loading, setLoading] = useState(false);

	async function loadContracts() {
		setLoading(true);
		const response = await api.get('/contracts');

		const data = response.data.map(contract => ({
			...contract,
			dateFormated: format(parseISO(contract.createdAt), 'dd/MM/yyyy'),
			priceFormated: formatPrice(contract.price_total_day),
		}));

		setLoading(false);
		setContracts(data);
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
					<div>
						<RegisterButton title="CADASTRAR" Icon={MdAdd} action={() => {}} />
						<Input
							placeholder="Buscar locatário"
							Icon={MdSearch}
							onChange={handleSearchName}
						/>
					</div>
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
