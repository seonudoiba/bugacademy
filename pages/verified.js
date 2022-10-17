import React from "react";
import Link from "next/link";
const verified = () => {
	return (
		<div className="h-screen flex-col flex justify-center items-center">
			<p className="text-2xl font-bold pb-6">Congratulation!!! Your have successful paid for the course</p>
			<Link  href="https://wa.link/29383j">
				<a className="text-blue-500 hover:text-blue-700">Click here to access your Course</a>
			</Link>
		</div>
	);
};

export default verified;
