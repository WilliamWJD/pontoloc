import React from 'react';

import PropTypes from 'prop-types';

import { Container, Total } from './styles';

export default function MaterialList({ data }) {
	return (
		<Container>
			<div>
				<strong>MATERIAL</strong>
				<strong>QUANTIDADE</strong>
				<strong>VALOR UNITÁRIO</strong>
				<strong>DIÁRIA</strong>
			</div>
			{data?.items?.map(item => (
				<div key={item.id}>
					<small>{item.material.name}</small>
					<small>{item.quantity}</small>
					<small>{item.material.price_day_formated}</small>
					<small>{item.price_quantity_day_formated}</small>
				</div>
			))}
			<Total>
				<h3>TOTAL:</h3>
				<small>{data.priceDay}</small>
			</Total>
		</Container>
	);
}

MaterialList.propTypes = {
	data: PropTypes.shape({
		priceDay: PropTypes.string,
		items: PropTypes.array,
	}).isRequired,
};
