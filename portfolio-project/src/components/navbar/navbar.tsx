import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss';

const Navbar: FunctionComponent = () => {
	return (
		<nav id="nav">
			<div className="logo">
				<h1>Frank van de Voorde</h1>
			</div>
			<div className="navbar expanded">
				<ul className="navbar-links">
					<NavLink to={`/`}>
						<li>
							<FontAwesomeIcon icon={faHouse} />
							<span className="navbar-link link">
								Home
							</span> 
						</li>
					</NavLink>
					<NavLink to={`skills`}>	
						<li>
							<FontAwesomeIcon icon={faCode} /> 
							<span className="navbar-link link">
								Skills	
							</span>
						</li>
					</NavLink>
					<NavLink to={`projects`}>	
						<li>
							<FontAwesomeIcon icon={faFolderOpen} /> 
							<span className="navbar-link link">
								Projects
							</span>
						</li>
					</NavLink>
					<NavLink to={`contact`}>	
						<li>
							<FontAwesomeIcon icon={faEnvelope} /> 
							<span className="navbar-link link">
								Contact
							</span>						
						</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;