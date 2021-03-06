import styled from 'styled-components';

export const Container = styled.div`
	padding-left: ${props => (props.hasIcon ? '16px' : '20px')};
	display: flex;

	background: #fff;
	border: 1px solid #ddd;
	border-radius: 4px;

	height: 36px;

	svg {
		margin-right: 8px;
	}

	input {
		font-size: 14px;
		border: 0;
		background: none;
		color: #4f4f4f;
		margin-right: 8px;
		height: 100%;

		::placeholder {
			color: #999;
		}
	}
`;
