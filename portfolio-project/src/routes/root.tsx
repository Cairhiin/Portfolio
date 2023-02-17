import React, { FunctionComponent } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion"
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './root.scss';

const Root: FunctionComponent = () => {
	const { pathname } = useLocation();

	const formatHeader = (path: string): string => {
		const pathname = path.replace('/', '');
		
		if (pathname) return pathname;
		return 'Home';
	}

	return (
		<div id="page">
			<Navbar />
			<Header>
				{ formatHeader(pathname) }
			</Header>
			<motion.div
		        key={pathname}
		        initial={{ opacity: 0, scale: 0.7 }}
			    animate={{ opacity: 1, scale: 1 }}
			    transition={{ duration: 0.5 }}
	        >
				<Outlet />
			</motion.div>
			<Footer />
		</div>
	)
}

export default Root;