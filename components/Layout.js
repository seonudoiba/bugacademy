import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
