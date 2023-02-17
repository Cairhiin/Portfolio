import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import './home.scss';

const Home: FunctionComponent = () => {
	return (
		<main id="home">
			<div id="content">
				<section>
					<h3 className="large-header">I am Frank van de Voorde</h3>
					<p>A self taught web developer and programmer with a bachelor in Business Administration, 
					exploring both frontend and full-stack development technologies, and with years of experience from designing, 
					developing and updating a Wordpress site for a local newspaper.</p>
					<p>I have supplemented self acquired skills with courses like UI/UX design, full-stack and frontend development at the LUT University,
					and C++ at Aalto University. Coding is my passion and I aim to learn new things on a daily basis.</p>
					<p>Check out my&nbsp; 
					<Link to="projects">projects</Link>,&nbsp; 
					<Link to="skills">skills</Link>,&nbsp; 
					<a href="https://github.com/Cairhiin" target="_blank" rel="noreferrer">GitHub</a>,&nbsp; 
					<a href="https://version.aalto.fi/gitlab/vandef2" target="_blank" rel="noreferrer">GitLab</a>, or&nbsp; 
					<Link to="projects">drop me a line</Link>. I am available for freelance opportunities.</p>
				</section>
			</div>
		</main>
	);
}

export default Home;