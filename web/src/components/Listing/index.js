import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Listing({ children, ...props }) {
	return <Container {...props}>{children}</Container>;
}

Listing.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	children: PropTypes.array.isRequired,
};
