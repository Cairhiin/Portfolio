import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

const Footer: FunctionComponent = () => {
	return (
		<footer>
			<div className="social-media-icons">
				<a href="https://github.com/Cairhiin" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} className="icon" />
				</a>
				<a href="https://version.aalto.fi/gitlab/vandef2" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGitlab} className="icon" />
				</a>
				<a href="https://www.linkedin.com/in/frank-van-de-voorde-691345118/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="icon" />
				</a>
			</div>
			<div className="copyright">
				© { new Date().getFullYear() } Frank van de Voorde
			</div>
		</footer>
	);
};

export default Footer;