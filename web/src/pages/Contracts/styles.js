import styled from 'styled-components';

import { darken } from 'polished';

import Button from '~/components/Button';
import ListContainer from '~/components/ListContainer';
import colors from '~/styles/colors';

export const Container = styled.div`
	padding: 30px 120px;

	display: flex;
	justify-content: center;
`;

export const Content = styled.div`
	max-width: 1200px;
	width: 100%;
`;

export const RegisterButton = styled(Button)`
	background: ${colors.primary};
	margin-right: 20px;

	&:hover {
		background: ${darken(0.1, colors.primary)};
	}
`;

export const ListContract = styled(ListContainer)`
	margin-top: 20px;
	padding-bottom: 0;

	display: flex;
	flex-direction: column;

	> div {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr 1fr;
		grid-template-rows: 36px;

		small {
			font-size: 16px;
			color: #666;
		}

		small + small {
			text-align: center;
		}
	}

	> div + div {
		border-top: 1px solid #eee;
		padding-top: 20px;
	}

	section {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr 1fr;
		grid-template-rows: 36px;

		strong {
			font-size: 16px;
			color: #444;
		}

		strong + strong {
			text-align: center;
		}
	}
`;
