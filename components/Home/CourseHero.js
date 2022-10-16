import React from "react";
import Image from "next/image";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const CourseHero = () => {
	return (
		<div>
			<div className="md:flex flex-row-reverse md:p-24  m-8 md:mx-0 md:my-2 gap-6 drop-shadow-lg bg-gray-900">
				<div className="bg-white md:mt-0 mt-4 md:w-1/2">
					<div className="flex items-center justify-center flex-col h-full ">
						<div className="text-3xl font-bold ">SCHOOL FEATURES</div>
						<div className="h-2 bg-red-900 w-12  my-2"></div>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							We Learn to Earn
						</Typography>
					</div>
				</div>
				<div className="md:grid grid-cols-2 gap-4 md:w-1/2">
					<div className="bg-white mx-4 rounded border m-4 md:m-0 md:rounded-xl px-8 ">
						<h2 className="font-bold text-8xl pt-6">A</h2>
						<div className="text-xl font-bold py-6 ">Academic Exellence</div>
						<div className="h-2 mb-8 bg-red-900 pb-2 w-12  "></div>
					</div>
					<div className="bg-white mx-4 rounded border m-4 md:m-0 md:rounded-xl px-8 ">
						<h2 className="font-bold text-8xl pt-6">O</h2>
						<div className="text-xl font-bold py-6 ">Online Management</div>
						<div className="h-2 mb-8 bg-red-900 pb-2 w-12"></div>
					</div>
					<div className="bg-white mx-4 rounded border m-4 md:m-0 md:rounded-xl px-8 ">
						<h2 className="font-bold text-8xl pt-6">C</h2>
						<div className="text-xl font-bold py-6 ">Careeer Paths</div>
						<div className="h-2 mb-8 bg-red-900 pb-2 w-12  "></div>
					</div>
					<div className="bg-white mx-4 rounded border  m-4 md:m-0 md:rounded-xl px-8 ">
						<h2 className="font-bold text-8xl pt-6">M</h2>
						<div className="text-xl font-bold py-6 ">Modern Careers</div>
						<div className="h-2 mb-8 bg-red-900 pb-2 w-12  "></div>
						___________________________________________________
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseHero;
