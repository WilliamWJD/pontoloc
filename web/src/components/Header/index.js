import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.png';

import { Container, Logo, Navigation } from './styles';

export default function Header() {
	return (
		<Container>
			<nav>
				<Logo>
					<img src={logo} alt="PontoLoc" />
				</Logo>
				<Navigation>
					<NavLink to="/contracts">ALUGUEIS</NavLink>
					<NavLink to="/clients">CLIENTES</NavLink>
					<NavLink to="/materials">MATERIAIS</NavLink>
				</Navigation>
			</nav>
		</Container>
	);
}
