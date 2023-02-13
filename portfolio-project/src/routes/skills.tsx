import React, { FunctionComponent } from 'react';
import Header from '../components/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import './skills.scss';

const Skills: FunctionComponent = () => {
	return (
		<main id="skills">
			<Header>Skills</Header>
			<div id="content">
				<section className="skill-list">
					<h3 className="large-header">The skills and tools I use</h3>
					<div className="skill-list skills">
						<FontAwesomeIcon icon={faHtml5} />
						<FontAwesomeIcon icon={faAngular} />
						<FontAwesomeIcon icon={faSass} />
						<FontAwesomeIcon icon={faJs} />				
						<FontAwesomeIcon icon={faReact} />
						<FontAwesomeIcon icon={faCss3Alt} />
						<FontAwesomeIcon icon={faGit} />
						<FontAwesomeIcon icon={faWordpress} />
						<FontAwesomeIcon icon={faPhp} />
						<img src="./images/typescript.svg" width="115px" height="115px" />
						<img src="./images/c.svg" width="115px" height="115px" />
					</div>
				</section>
			</div>	
		</main>
	);
}

export default Skills;