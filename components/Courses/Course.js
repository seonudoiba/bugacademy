import React from "react";
import Image from "next/image";
import PayButton from "../PayButton";
const Course = () => {
	return (
		<div className=''>
			<Image src="/course1.png" alt="image-alt-text" width={500} height={500} />
			<div className="mb-36 w-32 p-4 text-center mx-32 rounded-xl bg-green-800">
				<PayButton />
			</div>
		</div>
	);
};

export default Course;
