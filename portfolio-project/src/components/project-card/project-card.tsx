import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './project-card.scss';

export type Props = {
	id: number,
	title: string,
	text: string,
	image: string,
	links: { src: string, icon: IconDefinition }[],
	tech: string[]
};

const ProjectCard: FunctionComponent<Props> = ({ id, title, text, image, links, tech }) => {
	const linksJSX = links.map(link => 
		<a href={ link.src }>
			<FontAwesomeIcon icon={link.icon} />	
		</a>
	);
	const techJSX = tech.map(t => 
		<li>{ t }</li>
	);
	return (
		<div className={`card card${id}`}>
			<div className="card-image">
				<img src={ image } alt={ title } />
			</div>	
			<div className="card-text-area">
				<h4>{ title }</h4>
				<div className="card-highlight-area">					
					<p>{ text } </p>
					<span className="card-link-icons">
						{ linksJSX }
					</span>
				</div>
				<div className="card-tech">
					<ul>
						{ techJSX }
					</ul>
				</div>
			</div>	
		</div>
	);
}

export default ProjectCard;