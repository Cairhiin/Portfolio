import React, { FunctionComponent } from 'react';
import Header from '../components/header/header';
import ProjectCard from '../components/project-card/project-card';
import projects from '../assets/projects-data';
import './projects.scss';

const Projects: FunctionComponent = () => {
	const projectsJSX = projects.map(project => 
		<ProjectCard 
			id={ project.id }
			title={ project.title }
			text={ project.text }
			image={ project.image }
			links={ project.links }
		/>
	);
	return (
		<main id="projects">
			<Header>Projects</Header>
			<div id="content">
				<section className="project-list">
					{ projectsJSX }
				</section>
			</div>
		</main>
	);
}

export default Projects;