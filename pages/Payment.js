import React from "react";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import Image from "next/image";
import { useRouter } from "next/router";

const Payment = ({ price }) => {
	const publicKey = "pk_live_29ff08dd191bdddb67af65f590a9fbd2e9f511c7";
	const amount = price * 100; // Remember, set in kobo!
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	let router = useRouter();
	const componentProps = {
		email,
		amount,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: `Pay #${price}`,
		onSuccess: () => router.push("/verified"),
		onClose: () => alert("Are you sure you want to Cancel the payment?!!"),
	};

	return (
		<div className="flex h-screen justify-center hero">
			<div className="flex flex-col font-sans justify-center items-center md:mx-32 text-lg w-11/12 mx-auto md:w-1/2 bg-white">
				<div className="text-2xl md:text-4xl  font-bold  py-2">BULLISH GREEN ACADEMY</div>
				<div className="text-md md:text-lg  mx-auto w-3/4 py-2">
					Fill the Form below to complete your Payment
				</div>

				<form className="mx-auto w-3/4 py-8  ">
					<div className="space-x-2  flex flex-col">
						<label className="block text-gray-900 text-sm font-bold  mb-2" for="username">
							Full Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							id="name"
							onChange={(e) => setName(e.target.value)}
						/>
						<label className="block text-gray-900 text-sm font-bold mb-2" for="username">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label className="block text-gray-900 text-sm font-bold mb-2" for="username">
							Phone
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							id="phone"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
				</form>
				<PaystackButton
					className="h-10 m-4 px-6 font-semibold rounded-md bg-green-600 text-white"
					{...componentProps}
				/>
			</div>
		</div>
	);
};

Payment.getInitialProps = async ({ query }) => {
	const { price } = query;

	return { price };
};

export default Payment;
