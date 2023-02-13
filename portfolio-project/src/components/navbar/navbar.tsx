import React, { FunctionComponent, useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';

const Navbar: FunctionComponent = () => {
	const [isMenuOpen, toggleMenu] = useState<boolean>(false);
	return (
		<nav id="nav" className={ isMenuOpen ? "expanded" : "collapsed" }>
			<div className="hamburger">
				<FontAwesomeIcon icon={faBars} className="menu-toggle" onClick={ () => toggleMenu(true) } />
				<span className={ isMenuOpen ? "logo active" : "logo" }>
					<h1>Frank van de Voorde</h1>
				</span>
				<span className={ isMenuOpen ? "menu-toggle-button active" : "menu-toggle-button" }>
					<FontAwesomeIcon icon={faChevronRight} onClick={ () => toggleMenu(false) }/>
				</span>	
			</div>
			<div className={ isMenuOpen ? "navbar expanded" : "navbar collapsed" }>
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