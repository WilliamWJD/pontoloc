import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch, MdSentimentDissatisfied } from 'react-icons/md';

import { parseISO, format } from 'date-fns';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import Input from '~/components/Input';
import { formatPrice } from '~/util/format';

import Modal from './Modal';
import {
	Container,
	Content,
	RegisterButton,
	ListContract,
	Mensage,
} from './styles';

export default function Contracts() {
	const [contracts, setContracts] = useState([]);

	async function loadContracts() {
		const response = await api.get('/contracts');

		const data = response.data.map(contract => ({
			...contract,
			dateFormated: format(parseISO(contract.createdAt), 'dd/MM/yyyy'),
			priceFormated: formatPrice(contract.price_total_day),
		}));

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

				{contracts.length !== 0 ? (
					<ListContract>
						<section>
							<strong>NOME</strong>
							<strong>DATA DE RETIRADA</strong>
							<strong>DIÁRIA</strong>
						</section>
						{contracts.map(contract => (
							<div key={contract.id}>
								<small>{contract.client.name}</small>
								<small>{contract.dateFormated}</small>
								<small>{contract.priceFormated}</small>
								<Modal ContractId={contract.id} />
							</div>
						))}
					</ListContract>
				) : (
					<Mensage>
						<MdSentimentDissatisfied color="#ee4d64" size={70} />
						<strong>NADA ENCONTRADO!</strong>
					</Mensage>
				)}
			</Content>
		</Container>
	);
}
