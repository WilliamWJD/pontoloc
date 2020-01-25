import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ title, Icon, action, ...props }) {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Container onClick={action} {...props}>
			<Icon color="#fff" size={20} />
			{title}
		</Container>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	Icon: PropTypes.func.isRequired,
	action: PropTypes.func.isRequired,
};
