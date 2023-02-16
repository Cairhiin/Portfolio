import React, { FunctionComponent } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion"
import Navbar from '../components/navbar/navbar';
import './root.scss';

const Root: FunctionComponent = () => {
	const { pathname } = useLocation();
	return (
		<div id="page">
			<Navbar />
			<motion.div
		        key={pathname}
		        initial={{ opacity: 0, scale: 0.7 }}
			    animate={{ opacity: 1, scale: 1 }}
			    transition={{ duration: 0.5 }}
	        >
				<Outlet />
			</motion.div>
		</div>
	)
}

export default Root;