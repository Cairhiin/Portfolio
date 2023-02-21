import React, { FunctionComponent, useRef } from 'react';
import { useInView } from 'framer-motion';
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
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const linksJSX = links.map((link, index) => 
		<a key={index} href={ link.src }>
			<FontAwesomeIcon icon={link.icon} />	
		</a>
	);

	const techJSX = tech.map((t, index) => 
		<li key={index}>{ t }</li>
	);
	
	const translateAmount: string = id % 2 === 0 ? "translateX(-300px)" : "translateX(300px)";

	return (
		<div ref={ref} key={id} className={`card card${id}`}
			style={{
	          transform: isInView ? "none" : translateAmount,
	          opacity: isInView ? 1 : 0,
	          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
	        }}
		>
			<div className="card-image">
				<a href={links[0].src} target="_blank" rel="noreferrer">
					<img src={ image } alt={ title } />
				</a>
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