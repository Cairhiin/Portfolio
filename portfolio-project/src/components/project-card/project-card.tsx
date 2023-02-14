import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './project-card.scss';

export type Props = {
	id: number,
	title: string,
	text: string,
	image: string,
	links: { src: string, icon: IconDefinition }[]
};

const ProjectCard: FunctionComponent<Props> = ({ id, title, text, image, links }) => {
	const linksJSX = links.map(link => 
		<a href={ link.src }>
			<FontAwesomeIcon icon={link.icon} />	
		</a>
	);
	return (
		<div className="card card{id}">
			<img src={ image } alt={ title } />
			<div className="card-text">
				<h4>{ title }</h4>
				<p>{ text } <br />
				<span className="card-link-icons">
					{ linksJSX }
				</span>
				</p>
			</div>
		</div>
	);
}

export default ProjectCard;