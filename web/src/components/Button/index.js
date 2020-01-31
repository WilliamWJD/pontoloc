import React from 'react';

import PropTypes from 'prop-types';

import { Container as ContainerButton } from './styles';

export default function Button({ title, Icon, action, ...props }) {
	return (
		<ContainerButton onClick={action} {...props}>
			<Icon color="#fff" size={20} />
			{title}
		</ContainerButton>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	Icon: PropTypes.func.isRequired,
	action: PropTypes.func.isRequired,
};
