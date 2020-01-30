import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin-top: 100px;

	${props =>
		props.loading &&
		css`
			svg {
				animation: ${rotate} 2s linear infinite;
			}
		`}

	strong {
		color: #444;
		font-size: 16px;
		padding-top: 30px;
	}
`;
