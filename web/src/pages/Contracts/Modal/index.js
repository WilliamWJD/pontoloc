import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import Input from '~/components/Input';
import { formatPrice } from '~/util/format';

import MaterialList from './MaterialList';
import {
	ModalButton,
	Container,
	Date,
	Name,
	Content,
	Material,
} from './styles';

export default function Modal({ ContractId }) {
	const [contract, setContract] = useState({});

	async function handleContract() {
		const response = await api.get(`/contracts/${ContractId}`);

		const data = {
			...response.data,
			dateFormated: format(parseISO(response.data.createdAt), 'dd/MM/yyyy'),
			priceFormated: formatPrice(response.data.price_total_day),
			items: response.data.items.map(item => ({
				...item,
				price_quantity_day_formated: formatPrice(item.price_quantity_day),
			})),
		};

		setContract(data);
	}

	return (
		<Popup
			trigger={
				<ModalButton type="button" className="button">
					detalhes
				</ModalButton>
			}
			position="center center"
			modal
			onOpen={handleContract}
			closeOnDocumentClick
			contentStyle={{
				width: '900px',
				borderRadius: '4px',
				border: '1px solid #eee',
				padding: '30px',
			}}
		>
			<Container>
				<strong>#Nº {ContractId}</strong>
				<Content>
					<Name>
						<strong>LOCATÁRIO</strong>
						<Input disabled value={contract?.client?.name} />
					</Name>
					<Date>
						<strong>DATA DE RETIRADA</strong>
						<Input disabled value={contract?.dateFormated} />
					</Date>
				</Content>
				{contract?.items?.length !== 0 ? (
					<Material>
						<strong>MATERIAIS ADICIONADOS</strong>
						<MaterialList data={contract} />
					</Material>
				) : null}
			</Container>
		</Popup>
	);
}

Modal.propTypes = {
	ContractId: PropTypes.number.isRequired,
};
