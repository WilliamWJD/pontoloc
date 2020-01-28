import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 8px;
	width: 425px;
	padding: 20px 30px;
	border: 1px solid #ddd;
	border-radius: 4px;

	strong {
		color: #444;
	}

	strong + strong {
		text-align: center;
	}

	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 15px;
		padding-bottom: 20px;
	}

	div + div + div {
		padding-top: 20px;
		border-top: 1px solid #eee;
	}
`;

export const Total = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 15px;

	padding-top: 10px;

	h3 {
		font-size: 16px;
		grid-column-start: 2;
		grid-column-end: 3;
		text-align: right;
		color: ${colors.primary};
	}

	small {
		text-align: center;
	}
`;
