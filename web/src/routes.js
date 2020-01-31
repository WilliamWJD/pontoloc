import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Clients from '~/pages/Clients';
import ClientsRegister from '~/pages/Clients/Form';
import Contracts from '~/pages/Contracts';
import Materials from '~/pages/Materials';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact render={() => <Redirect to="/contracts" />} />

			<Route path="/contracts" component={Contracts} />

			<Route path="/clients" exact component={Clients} />
			<Route path="/clients/register" component={ClientsRegister} />

			<Route path="/materials" component={Materials} />
		</Switch>
	);
}
