import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormHeader({ title, children }) {
	return (
		<Container>
			<strong>{title}</strong>
			<div>{children}</div>
		</Container>
	);
}

FormHeader.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
