import React from "react";
import Link from "next/link";
const PayButton = () => {
	return (
		<div>
			<Link
				href="/Payment"
				className="mb-36 w-32 p-4 text-center mx-32 rounded-xl bg-green-800">
				Pay Now
			</Link>
		</div>
	);
};

export default PayButton;
