import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import { InputWithIcon as Input } from '~/components/Input';
import { formatPrice } from '~/util/format';

import MaterialList from './MaterialList';
import {
	ModalButton,
	Container,
	Label,
	Name,
	Title,
	Material,
	FinalPrice,
} from './styles';

export default function Modal({ ContractId }) {
	const [contract, setContract] = useState({});

	async function handleContract() {
		const response = await api.get(`/contracts/${ContractId}`);

		const data = {
			...response.data,
			getDate: format(parseISO(response.data.createdAt), 'dd/MM/yyyy'),
			devolutionDate: response.data.returned_at
				? format(parseISO(response.data.returned_at), 'dd/MM/yyyy')
				: '__/__/____',
			priceDay: formatPrice(response.data.price_total_day),
			deliveryPriceFormated: formatPrice(response.data.delivery_price),
			priceColletFormated: formatPrice(response.data.collet_price),
			priceFinalFormated: formatPrice(response.data.final_price),
			items: response.data.items.map(item => ({
				...item,
				material: {
					...item.material,
					price_day_formated: formatPrice(item.material.price_day),
				},
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
				width: '1000px',
				borderRadius: '4px',
				border: '1px solid #eee',
				padding: '30px',
			}}
		>
			<div>
				<Title>#Nº {ContractId}</Title>
				<Container>
					<Name>
						<strong>LOCATÁRIO</strong>
						<Input disabled value={contract?.client?.name || ''} />
					</Name>
					<Label>
						<strong>DATA DE RETIRADA</strong>
						<Input disabled value={contract?.getDate || ''} />
					</Label>
					<Label>
						<strong>DATA DE DEVOLUÇÃO</strong>
						<Input disabled value={contract?.devolutionDate || ''} />
					</Label>

					<div>
						{contract?.items?.length !== 0 ? (
							<Material>
								<strong>MATERIAIS ADICIONADOS</strong>
								<MaterialList data={contract} />
							</Material>
						) : null}
					</div>
					<Label>
						<strong>ENTREGA</strong>
						<Input disabled value={contract?.deliveryPriceFormated || ''} />
					</Label>
					<Label style={{ justifyContent: 'space-between' }}>
						<Label style={{ display: 'flex', flexDirection: 'column' }}>
							<strong>COLETA</strong>
							<Input disabled value={contract?.priceColletFormated || ''} />
						</Label>
						<FinalPrice>
							<strong>PREÇO FINAL</strong>
							<Input disabled value={contract?.priceFinalFormated || ''} />
						</FinalPrice>
					</Label>
				</Container>
			</div>
		</Popup>
	);
}

Modal.propTypes = {
	ContractId: PropTypes.number.isRequired,
};
