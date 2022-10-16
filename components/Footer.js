import React from "react";
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className="text-center flex flex-col justify-center items-center pb-6 bg-green-700  text-white" >
			<div className="container pt-9">
				<div className="flex justify-center mb-9">
					{/* <Link href="" className="mr-9 text-black">
						
					</Link>
					<Link href="#!" className="mr-9 text-black">
						
					</Link>
					<Link href="#!" className="mr-9 text-black">
						
					</Link>
					<Link href="#!" className="mr-9 text-black">
						
					</Link>
					<Link href="#!" className="mr-9 text-black">
						
					</Link>
					<Link href="#!" className="text-black">
						
					</Link> */}
                    hello
				</div>
			</div>

			<div
				className="text-center text-white font-bold p-4"
				>
				© 2022 Copyright : 
				<Link className="text-white" href="https://tailwind-elements.com/">
                <a> &nbsp; Bullish Green Academy</a>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
