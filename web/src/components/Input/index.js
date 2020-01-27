import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ placeholder, Icon, ...props }) {
	return (
		<Container hasIcon={!!Icon}>
			{Icon && <Icon color="#999" size={16} />}
			<input type="text" placeholder={placeholder} {...props} />
		</Container>
	);
}

Input.propTypes = {
	placeholder: PropTypes.string,
	Icon: PropTypes.func,
};

Input.defaultProps = {
	Icon: null,
	placeholder: '',
};
