import React from 'react';
import { MdAdd } from 'react-icons/md';

import FormHeader from '~/components/FormHeader';

import { Container, RegisterButton } from './styles';

export default function Contracts() {
	return (
		<Container>
			<FormHeader title="Gerenciando alugueis">
				<RegisterButton title="CADASTRAR" Icon={MdAdd} />
			</FormHeader>
		</Container>
	);
}
