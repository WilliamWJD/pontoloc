import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Message({ Icon, color, title }) {
	return (
		<Container>
			<Icon color={color} size={70} />
			<strong>{title}</strong>
		</Container>
	);
}

Message.propTypes = {
	Icon: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
