import styled from 'styled-components';

import { darken } from 'polished';

import Button from '~/components/Button';
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
