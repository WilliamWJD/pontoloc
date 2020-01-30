import styled from 'styled-components';

import { darken } from 'polished';

import Button from '~/components/Button';
import ListingClient from '~/components/Listing';
import colors from '~/styles/colors';

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const Content = styled.div`
	margin-top: 30px;

	max-width: 1200px;
	width: 100%;

	display: flex;
	flex-direction: column;
`;

export const RegisterButton = styled(Button)`
	background: ${colors.primary};
	margin-right: 20px;

	&:hover {
		background: ${darken(0.1, colors.primary)};
	}
`;

export const ListClient = styled(ListingClient)`
	div {
		a {
			text-align: right;
			font-size: 15px;
			color: ${colors.info};
		}
	}
`;

/* export const ListClient = styled(ListContainer)`
	margin-top: 20px;
	padding-bottom: 10px;

	> section {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr 1fr;
		margin-bottom: 20px;

		strong {
			font-size: 16px;
			color: #444;
		}

		strong + strong {
			text-align: center;
		}
	}

	> div {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr 1fr;
		margin-bottom: 20px;

		small {
			font-size: 16px;
			color: #666;
		}

		small + small {
			text-align: center;
		}

		a {
			text-align: right;
			font-size: 15px;
			color: ${colors.info};
		}
	}

	> div + div {
		border-top: 1px solid #eee;
		padding-top: 20px;
	}
`; */
