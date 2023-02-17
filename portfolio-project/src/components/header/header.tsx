import React, { ReactNode, FunctionComponent } from 'react';
import './header.scss';

export type Props = {
	children: ReactNode;
};

const Header: FunctionComponent<Props> = ({ children }) => {
	return (
		<header id="page-header">
			<h2>{ children }</h2>
		</header>
	);
};

export default Header;