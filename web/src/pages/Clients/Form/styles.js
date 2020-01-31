import styled from 'styled-components';

import { Form as UnForm } from '@rocketseat/unform';

import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const Content = styled.div`
	margin-top: 30px;
	max-width: 900px;
	width: 100%;

	display: flex;
	flex-direction: column;
`;

export const BackButton = styled(Button)`
	background: ${colors.back};
	margin-right: 16px;
`;

export const SaveButton = styled(Button)`
	background: ${colors.primary};
`;

export const Form = styled(UnForm)`
	margin-top: 20px;
	padding: 30px;
	border-radius: 4px;
	background: #fff;

	div {
		display: flex;
		flex-direction: column;

		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			section {
				display: flex;
				flex-direction: column;
				margin-bottom: 20px;
			}

			section:nth-child(1) {
				max-width: 540px;
				width: 100%;
			}

			section:nth-child(2) {
				max-width: 270px;
				width: 100%;
			}
		}
	}

	strong {
		font-size: 14px;
		color: #444;
		margin-bottom: 8px;
	}
`;
