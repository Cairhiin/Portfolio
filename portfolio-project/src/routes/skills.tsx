import React, { FunctionComponent } from 'react';
import Header from '../components/header/header';

const Skills: FunctionComponent = () => {
	return (
		<main id="skills">
			<Header>Skills</Header>
			<section className="skill-list">
				<h3 className="large-header">The skills and tools I use</h3>
				<div className="skill-list skills">

				</div>
			</section>
		</main>
	);
}

export default Skills;