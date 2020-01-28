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

export const Name = styled.div`
	display: flex;
	flex-direction: column;
	width: 650px;

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

export const Date = styled.div`
	display: flex;
	flex-direction: column;

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

export const Content = styled.div`
	display: flex;
	justify-content: space-between;

	> div {
		margin-bottom: 20px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	> strong {
		font-size: 18px;
		color: ${colors.primary};
		margin-bottom: 20px;
	}

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
