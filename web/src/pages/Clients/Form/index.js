import React from 'react';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import FormHeader from '~/components/FormHeader';
import { Input, InputMask } from '~/components/Input';

import { Container, Content, SaveButton, BackButton, Form } from './styles';

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
			// if (error.response.status === 400) {
			// 	toast.error('Cliente já cadastrado');
			// } else {
			// 	toast.error('Error ao conecter o servidor!');
			// }
			if (error.message === 'Network Error') {
				toast.error('Servidor indisponível no momento!');
			} else {
				toast.error('Cliente já cadastrado!');
			}
			console.log(JSON.parse(JSON.stringify(error)));
			console.log(error.response);

			resetForm();
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

				<Form id="form" onSubmit={handleSubmit}>
					<div>
						<div>
							<section>
								<strong>NOME COMPELTO</strong>
								<Input
									name="name"
									placeholder="Ex.: Elias Gabriel da Cruz Figueredo"
									required
								/>
							</section>
							<section>
								<strong>CPF</strong>
								<InputMask
									mask="999/999/999-99"
									name="cpf"
									placeholder="Ex.: 000/000/000-00"
									required
								/>
							</section>
						</div>
						<div>
							<section>
								<strong>ENDEREÇO</strong>
								<Input
									name="endereco"
									placeholder="Ex.: Rua Mato Grosso, 108, Alto Sobradinho"
									required
								/>
							</section>
							<section>
								<strong>TELEFONE</strong>
								<InputMask
									mask="(99) 9 9999-9999"
									name="telefone"
									placeholder="(00) 0 0000-0000"
									required
								/>
							</section>
						</div>
					</div>
				</Form>
			</Content>
		</Container>
	);
}
