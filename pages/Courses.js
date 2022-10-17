import React from "react";
import Course from "../components/Courses/Course";
import PaymentIcon from "@mui/icons-material/Payment";

const Courses = () => {
	return (
		<div className="w-full">
			<div className="md:h-1/5 md:p-28 p-12 hero  text-center md:text-left">
				<div className="flex flex-col items-center">
					<div className="text-2xl md:text-4xl  font-bold text-white p-2">
						OUR COURSES
					</div>
					<div className="h-1 bg-red-700  w-12 ml-2 my-2"></div>
					<div className="text-lg md:font-bold text-white px-6">Admissions open !</div>
				</div>
			</div>
			{/* ////////////////////////////////////////// */}
			<div className=" md:flex justify-center mx-auto ">
				<div className="md:w-5/12 shadow mx-4 md:p-8 p-4">
					<Course />
				</div>
				<div className="md:w-5/12 shadow mx-4 md:p-8 p-4">
					<Course />
				</div>
			</div>
			<div className=" md:flex justify-center mx-auto ">
				<div className="md:w-5/12 shadow mx-4 md:p-8 p-4">
					<Course />
				</div>
			</div>
		</div>
	);
};

export default Courses;
