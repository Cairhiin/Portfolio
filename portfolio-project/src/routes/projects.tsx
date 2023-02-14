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
			tech={ project.tech }
		/>
	);
	return (
		<main id="projects">
			<Header>Projects</Header>
			<div id="content">
				<section>
					<h3 className="large-header">Some things I've built</h3>
					<div className="project-list">
						{ projectsJSX }
					</div>
				</section>
			</div>
		</main>
	);
}

export default Projects;