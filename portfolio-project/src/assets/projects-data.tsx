import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import DungeonAndCats from '../assets/images/dungeon-and-cats.png';
import Reimari from '../assets/images/reimari.png';
import Bookrater from '../assets/images/bookrater.png';
import Gloomhaven from '../assets/images/gloomhaven.png';

const projects = [
	{
		id: 1,
		title: 'Dungeon and Cats',
		text: 'A topdown RPG roguelike made in C++ with SDL2. The game features a light weight entity component system.',
		image: DungeonAndCats,
		links: [
			{
				src: 'https://version.aalto.fi/gitlab/vandef2/dungeon-and-cats',
				icon: faGitlab
			}
		],
		tech: ['SDL2', 'SDL Image', 'SDL Mixer', 'SDL TTF']
	},
	{
		id: 2,
		title: 'Reimari',
		text: 'A wordpress website for a local newspaper that is distributed weekly.',
		image: Reimari,
		links: [
			{
				src: 'https://github.com/Cairhiin/Reimari',
				icon: faGithub
			},
			{
				src: 'https://reimari.fi',
				icon: faFile
			},
		],
		tech: ['PHP', 'Wordpress', 'JavaScript']
	},
	{
		id: 3,
		title: 'Bookrater',
		text: 'A MEAN stack project for rating books. Browse through books, rate them and see how others rate the books you enjoy.',
		image: Bookrater,
		links: [
			{
				src: 'https://github.com/Cairhiin/Full-stack-MEAN-course/tree/main/fullstack-MEAN-project',
				icon: faGithub
			},
			{
				src: 'https://bookrater.onrender.com/',
				icon: faFile
			},
			{
				src: 'https://www.figma.com/file/Gkwm5lgahuRNLaLP99gC9d/Bookrater?node-id=51822%3A4901&t=fGpC3XpZb1yst3j0-1',
				icon: faFigma
			},
		],
		tech: ['Express', 'Mongoose', 'Angular', 'TypeScript']
	},
	{
		id: 4,
		title: 'Gloomhaven',
		text: 'A Flutter UI design project to create a website for an offline activity.',
		image: Gloomhaven,
		links: [
			{
				src: 'https://github.com/Cairhiin/gloomhaven',
				icon: faGithub
			},
			{
				src: 'https://www.figma.com/file/gdLJWY1u3gSzvL13QJ5k5h/Gloomhaven-UI-project?node-id=51396%3A5246&t=fvSw0TaZqEFVgdni-1',
				icon: faFigma
			},
		],
		tech: ['Dart', 'Flutter']
	}
];

export default projects;