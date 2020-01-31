import React from 'react';
import Mask from 'react-input-mask';

import PropTypes from 'prop-types';

import Input from '../Input';

export default function InputMask({ name, mask, placeholder, ...props }) {
	return (
		<Mask mask={mask}>
			{() => <Input name={name} placeholder={placeholder} {...props} />}
		</Mask>
	);
}

InputMask.propTypes = {
	name: PropTypes.string.isRequired,
	mask: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};
