import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.scss';

const Navbar: FunctionComponent = () => {
	return (
		<div id="nav">
			<div className="logo">
				Frank van de Voorde
			</div>
			<div className="navbar expanded">
				<ul className="navbar-links">
					<NavLink 
						to={`about`}
						className={({ isActive }) =>
			              isActive ? 'active' : undefined
			            }
					>
						<li>About</li>
					</NavLink>
					<NavLink to={`skills`}>	
						<li>Skills</li>
					</NavLink>
					<NavLink to={`projects`}>	
						<li>Projects</li>
					</NavLink>
					<NavLink to={`contact`}>	
						<li>Contact</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;