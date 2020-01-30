import styled from 'styled-components';

export const Container = styled.div`
	background: #fff;
	width: 100%;

	padding: 30px 30px 10px 30px;
	border-radius: 4px;

	margin-top: 20px;

	> section {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr 1fr;
		padding-bottom: 20px;

		strong {
			font-size: 16px;
			color: #444;
		}

		strong + strong {
			text-align: center;
		}
	}

	/* display: flex;
	flex-direction: column; */

	> div {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr 1fr;
		padding-bottom: 20px;

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
`;
