import React from 'react';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import FormHeader from '~/components/FormHeader';
import { Input, InputMask } from '~/components/Input';

import { Container, Content, SaveButton, BackButton, Form } from './styles';

const schema = Yup.object().shape({
	name: Yup.string().required('Nome é obrigatório'),
	cpf: Yup.string().required('CPF é obrigatório'),
	endereco: Yup.string().required('Endereço é obrigatório'),
	telefone: Yup.string().required('Telefone é obrigatório'),
});

export default function ClientForm() {
	async function handleSubmit(
		{ name, cpf, endereco, telefone },
		{ resetForm }
	) {
		try {
			await api.post('/clients', {
				name,
				cpf,
				endereco,
				telefone,
			});

			resetForm();
			toast.success('Cliente cadastrado com sucesso!');
		} catch (error) {
			if (!error.response) {
				toast.error('Servidor indisponível no momento!');
			} else {
				toast.error(error.response.data.error);
			}
		}
	}

	return (
		<Container>
			<Content>
				<FormHeader title="Cadastro de cliente">
					<BackButton
						Icon={MdKeyboardArrowLeft}
						title="VOLTAR"
						action={() => history.goBack()}
					/>
					<SaveButton
						form="form"
						Icon={MdAdd}
						title="SALVAR"
						action={() => {}}
					/>
				</FormHeader>

				<Form id="form" schema={schema} onSubmit={handleSubmit}>
					<div>
						<div>
							<section>
								<strong>NOME COMPELTO</strong>
								<Input
									name="name"
									placeholder="Ex.: Elias Gabriel da Cruz Figueredo"
								/>
							</section>
							<section>
								<strong>CPF</strong>
								<InputMask
									mask="999.999.999-99"
									name="cpf"
									placeholder="Ex.: 000.000.000-00"
								/>
							</section>
						</div>
						<div>
							<section>
								<strong>ENDEREÇO</strong>
								<Input
									name="endereco"
									placeholder="Ex.: Rua Mato Grosso, 108, Alto Sobradinho"
								/>
							</section>
							<section>
								<strong>TELEFONE</strong>
								<InputMask
									mask="(99) 9 9999-9999"
									name="telefone"
									placeholder="(00) 0 0000-0000"
								/>
							</section>
						</div>
					</div>
				</Form>
			</Content>
		</Container>
	);
}
