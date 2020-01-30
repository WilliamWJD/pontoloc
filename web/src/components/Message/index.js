import React from 'react';
import { MdAutorenew } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Message({ Icon, color, title, loading }) {
	return (
		<Container loading={Number(loading)}>
			{loading ? (
				<MdAutorenew color="#ee4d64" size={70} />
			) : (
				<>
					<Icon color={color} size={70} />
					<strong>{title}</strong>
				</>
			)}
		</Container>
	);
}

Message.propTypes = {
	Icon: PropTypes.func,
	color: PropTypes.string,
	title: PropTypes.string,
	loading: PropTypes.bool,
};

Message.defaultProps = {
	loading: false,
	Icon: null,
	color: '',
	title: '',
};
