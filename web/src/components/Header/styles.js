import styled from 'styled-components';

export const Container = styled.div`
	background: #fff;
	height: 65px;
	display: flex;
	align-items: center;

	nav {
		display: flex;
		align-items: center;
		margin-left: 30px;
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	padding-right: 30px;

	img {
		height: 55px;
	}
`;

export const Navigation = styled.div`
	border-left: 1px solid #ddd;
	padding-left: 30px;

	a {
		margin-right: 20px;
		font-size: 15px;
		font-weight: bold;
		color: #999;
		transition: color 0.2s;

		&:hover {
			color: #ffd700;
		}

		&.active {
			color: #444;
		}
	}
`;
