import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/header/header';
import ProjectCard from '../components/project-card/project-card';
import DungeonAndCats from '../assets/images/dungeon-and-cats.png';

const projects = [
	{
		id: 1,
		title: 'Dungeon and Cats',
		text: 'A game made in C++ with SDL2',
		image: DungeonAndCats,
		links: [
			{
				src: 'https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats',
				icon: faGitlab
			}
		]
	},
	{
		id: 2,
		title: 'Reimari',
		text: 'A wordpress website for a local newspaper',
		image: '',
		links: [
			{
				src: 'https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats',
				icon: faGitlab
			}
		]
	},
	{
		id: 3,
		title: 'Bookrater',
		text: 'A MEAN fullstack project for rating books',
		image: '',
		links: [
			{
				src: 'https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats',
				icon: faGitlab
			}
		]
	},
	{
		id: 4,
		title: 'Gloomhaven',
		text: 'A Flutter UI design project',
		image: '',
		links: [
			{
				src: 'https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats',
				icon: faGitlab
			}
		]
	}
];

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