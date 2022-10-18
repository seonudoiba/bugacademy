import React from "react";
import Image from "next/image";
import Link from "next/link";
const Course = ({ image, amount }) => {
	return (
		<div className="flex flex-col justify-center">
			<div className="py-4">
				<Image
					src={`/${image}.png`}
					alt="image-alt-text"
					width={940}
					height={788}
					objectFit="cover"
				/>
			</div>

			<div className="mb-6 w-32 p-4 text-center mx-auto rounded-xl text-white font-bold text-xl bg-green-800">
				<Link href={{ pathname: "/Payment", query: { price: amount } }}>
					<a>Pay Now</a>
				</Link>
			</div>
		</div>
	);
};

export default Course;
