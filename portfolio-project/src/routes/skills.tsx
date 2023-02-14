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
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import TypeScript from '../assets/images/typescript.svg';
import Cpp from '../assets/images/c.svg';
import './skills.scss';

const Skills: FunctionComponent = () => {
	return (
		<main id="skills">
			<Header>Skills</Header>
			<div id="content">
				<section className="skill-list">
					<h3 className="large-header">The skills and tools I use</h3>
					<div className="skill-list skills">
					<div className="skill">
						<FontAwesomeIcon icon={faHtml5} />
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faAngular} />
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faSass} />
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faJs} />	
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faFigma} />			
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faReact} />
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faCss3Alt} />
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faGit} />
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faWordpress} />
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faPhp} />
					</div>
					<div className="skill">
						<img src={ TypeScript } alt="Typescript" />
					</div>
					<div className="skill">
						<img src={ Cpp } alt="C++" />
					</div>
					</div>
				</section>
			</div>	
		</main>
	);
}

export default Skills;