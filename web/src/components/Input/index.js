import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ placeholder, Icon }) {
	return (
		<Container hasIcon={!!Icon}>
			{Icon && <Icon color="#999" size={16} />}
			<input type="text" placeholder={placeholder} />
		</Container>
	);
}

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	Icon: PropTypes.func,
};

Input.defaultProps = {
	Icon: null,
};
