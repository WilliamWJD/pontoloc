import styled from 'styled-components';

import { Input } from '@rocketseat/unform';

export default styled(Input)`
	border: 1px solid #ddd;
	border-radius: 4px;
	height: 45px;
	font-size: 16px;
	padding-left: 15px;
	color: #444;

	::placeholder {
		color: #999;
	}

	letter-spacing: 0.5px;
`;
