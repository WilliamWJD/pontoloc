import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Clients from '~/pages/Clients';
import Contracts from '~/pages/Contracts';
import Materials from '~/pages/Materials';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact render={() => <Redirect to="/contracts" />} />
			<Route path="/contracts" component={Contracts} />
			<Route path="/clients" component={Clients} />
			<Route path="/materials" component={Materials} />
		</Switch>
	);
}
