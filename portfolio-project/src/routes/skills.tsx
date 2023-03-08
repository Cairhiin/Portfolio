import React, { FunctionComponent } from 'react';
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
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
import TypeScript from '../assets/images/typescript.svg';
import Cpp from '../assets/images/c.svg';
import './skills.scss';

const Skills: FunctionComponent = () => {
	return (
		<main id="skills">
			<div id="content">
				<div></div>
				<div>
					<section className="skill-list">
						<h3 className="large-header">The skills and tools I use</h3>
						<div className="skill-list skills">
						<div className="skill">
							<FontAwesomeIcon icon={faHtml5} />
							<span className="skill-text">HTML5</span>
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faAngular} />
							<span className="skill-text">Angular</span>
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faSass} />
							<span className="skill-text">Sass</span>
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faJs} />
							<span className="skill-text">JavaScript</span>	
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faFigma} />
							<span className="skill-text">Figma</span>			
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faReact} />
							<span className="skill-text">React</span>
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faCss3Alt} />
							<span className="skill-text">CSS3</span>
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faGit} />
							<span className="skill-text">Git</span>
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faWordpress} />
							<span className="skill-text">WordPress</span>
						</div>
						<div className="skill">
							<FontAwesomeIcon icon={faPhp} />
							<span className="skill-text">PHP</span>
						</div>
						<div className="skill">
							<img src={ TypeScript } alt="Typescript" />
							<span className="skill-text">TypeScript</span>
						</div>
						<div className="skill">
							<img src={ Cpp } alt="C++" />
							<span className="skill-text">C++</span>
						</div>
						</div>
					</section>
					<section className="skill-list">
						<h3 className="large-header">Currently learning</h3>
						<div className="skill-learning">
							<div className="skill">
								<FontAwesomeIcon icon={faLaravel} />
							</div>
							<div className="skill-text">Laravel & <br /> Tailwind</div>
						</div>
					</section>
				</div>
				<div></div>	
			</div>	
		</main>
	);
}

export default Skills;