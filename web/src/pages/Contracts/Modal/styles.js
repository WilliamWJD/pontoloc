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
`;

export const Date = styled.div`
	width: 150px;
	display: flex;
	flex-direction: column;

	text-align: center;
	input {
		text-align: center;
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

	div {
		strong {
			font-size: 14px;
			color: #444;
			margin-bottom: 8px;
		}
	}

	/* > div {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;

		strong {
			font-size: 14px;
			color: #444;
		}

		div {
			margin-top: 8px;
		}
	} */
`;
