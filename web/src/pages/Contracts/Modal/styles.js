import styled from 'styled-components';

import colors from '~/styles/colors';

export const ModalButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	width: 60px;
	height: 15px;
	margin-left: 117.66px;

	font-size: 15px;
	color: ${colors.info};

	background: none;
	border: none;
`;

export const Title = styled.strong`
	font-size: 18px;
	color: ${colors.primary};
`;

export const Name = styled.div`
	display: flex;
	flex-direction: column;
	width: 425px;

	strong {
		font-size: 14px;
		color: #444;
		margin-bottom: 8px;
	}

	div {
		input {
			font-size: 16px;
		}
	}
`;

export const Label = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	strong {
		font-size: 14px;
		color: #444;
		margin-bottom: 8px;
	}

	> div {
		width: 130px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
	}

	text-align: center;
	div {
		input {
			text-align: center;
			margin: 0;
			font-size: 16px;
		}
	}
`;

export const Container = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-row-gap: 20px;
	grid-column-gap: 45px;

	input {
		width: 100%;
		font-size: 15px;
	}
`;

export const Material = styled.div`
	> strong {
		font-size: 14px;
		color: #444;
	}
`;

export const FinalPrice = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	strong {
		font-size: 14px;
		color: #444;
		margin-bottom: 8px;
	}

	> div {
		width: 130px;
		display: flex;
		background: #ddd;

		justify-content: center;
		align-items: center;
		padding: 0;

		border-color: #333;

		input {
			color: #333;
		}
	}
`;
