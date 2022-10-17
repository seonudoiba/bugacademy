import React from "react";
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="text-center flex flex-col justify-center items-center pb-6 bg-gray-700  text-white" >
			<div className="">
				<div className="flex justify-center mt-9 space-x-4 md:space-x-9 ">
					<Link href="https://twitter.com/bugacademyx?t=oN4Z9Z8LGjAyHAqcLMMX0w&s=09" className="mr-9 text-black">
						<FaTwitter className="text-lg md:text-3xl cursor-pointer"/>
					</Link>
					<Link href="https://www.instagram.com/bullishgreen_academy/" className="mr-9 text-black">
						<FaInstagram className="text-lg md:text-3xl cursor-pointer"/>
					</Link>
					<Link href="https://t.me/bugacademy" className="mr-9 text-black">
						<FaTelegram className="text-lg md:text-3xl cursor-pointer"/>
					</Link>
					<Link href="https://wa.link/29383j" className="mr-9 text-black">
						<FaWhatsapp className="text-lg md:text-3xl cursor-pointer"/>
					</Link>
				</div>
			</div>

			<div
				className="text-center text-white font-bold p-4"
				>
				© 2022 Copyright : 
				<Link className="text-white" href="/">
                <a> &nbsp; Bullish Green Academy</a>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
