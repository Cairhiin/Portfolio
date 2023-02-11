import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import './navbar.scss';

const Navbar: FunctionComponent = () => {
	return (
		<div id="nav">
			<div className="logo">
				Frank van de Voorde
			</div>
			<div className="navbar expanded">
				<ul className="navbar-links">
					<Link to={`about`}>
						<li>About</li>
					</Link>
					<a href="#">	
						<li>Skills</li>
					</a>
					<a href="#">	
						<li>Projects</li>
					</a>
					<a href="#">	
						<li>Contact</li>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;