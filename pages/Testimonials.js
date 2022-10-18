import React from "react";
import Image from "next/image";
const Testimonials = () => {
	return (
		<div className="pb-36">
			<div className="md:h-1/5 md:p-28 p-12 hero  text-center md:text-left">
				<div className="flex flex-col items-center">
					<div className="text-2xl md:text-4xl  font-bold text-white p-2">
						TESTIMONIALS
					</div>
					<div className="h-1 bg-red-700  w-12 ml-2 my-2"></div>
					<div className="text-lg md:font-bold text-white px-6">Admissions open !</div>
				</div>
			</div>
			{/* ////////////////////////////////////////// */}

			<div className=" md:flex justify-center mx-auto ">
				<div className="md:w-5/12 shadow m-4 md:my-8 md:p-8 p-4 ">
					
						<Image
							src="/review1.jpg"
							alt="image-alt-text"
							width={1280}
							height={1280}
							objectFit="cover"
						/>
					
				</div>
				<div className="md:w-5/12 shadow m-4 md:my-8 md:p-8 p-4 ">
					
						<Image
							src="/review2.jpg"
							alt="image-alt-text"
							width={1280}
							height={1280}
							objectFit="cover"
						/>
					
				</div>
			</div>
			<div className=" md:flex justify-center mx-auto ">
				<div className="md:w-5/12 shadow m-4 md:my-8 md:p-8 p-4 ">
				<Image
							src="/review3.jpg"
							alt="image-alt-text"
							width={1280}
							height={1280}
							objectFit="cover"
						/>
				</div>
				<div className="md:w-5/12 shadow m-4 md:my-8 md:p-8 p-4 ">
					
						<Image
							src="/review4.jpg"
							alt="image-alt-text"
							width={1280}
							height={1280}
							objectFit="cover"
						/>
					
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
