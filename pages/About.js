import React from "react";
import Typography from "@mui/material/Typography";
const About = () => {
	return (
		<div className="pb-36">
			<div className="md:h-1/5 md:p-28 p-12 hero  text-center md:text-left">
				<div className="flex flex-col items-center">
					<div className="text-2xl md:text-4xl  font-bold text-white p-2">ABOUT US</div>
					<div className="h-1 bg-red-700  w-12 ml-2 my-2"></div>
					<div className="text-lg md:font-bold text-white px-6">Read more About us</div>
				</div>
			</div>
			{/* ////////////////////////////////////////// */}
			<div className=" text-center mx-8 my-16 md:m-28">
				<div className=" flex flex-col justify-center items-center my-8">
					<div className="text-3xl md:text-6xl font-bold text-italic">WHO ARE WE?</div>
					<div className="h-1  bg-red-700 w-12 ml-2 my-2"></div>
					<p className="text-xl md:text-2xl">
						We Learn to Earn
					</p>
				</div>
				<div variant="body2" className="text-3xl text-left">
					<p>
						This academy was first known as cryptospin academy in September, 2021 now
						known as the bullish green academy August , 2022. <br/>There has been a rebrand for
						those that are early to joined are lucky because they joined on discount
						prices.
					</p>
					<br />
					<p>
						BUGA is an online academy that educates students on the blockchain technology
						, #DEFI , crypto trading and supply of crypto signal.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
