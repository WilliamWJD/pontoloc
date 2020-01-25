import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import FormHeader from '~/components/FormHeader';
import Input from '~/components/Input';

import { Container, RegisterButton } from './styles';

export default function Contracts() {
	return (
		<Container>
			<FormHeader title="Gerenciando alugueis">
				<div>
					<RegisterButton title="CADASTRAR" Icon={MdAdd} action={() => {}} />
					<Input placeholder="Buscar locatário" Icon={MdSearch} />
				</div>
			</FormHeader>
		</Container>
	);
}
