import React, { FunctionComponent } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const Root: FunctionComponent = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default Root;