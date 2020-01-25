import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ title, Icon, ...props }) {
	return (
		<Container onClick={() => {}} {...props}>
			<Icon color="#fff" size={20} />
			{title}
		</Container>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	Icon: PropTypes.func.isRequired,
};
