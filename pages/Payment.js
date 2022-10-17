import React from "react";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import Image from "next/image";
const PayButton = () => {
	const publicKey = "pk_test_712d32ccfd4291f7990393998e1f664d90a087c1";
	const amount = 10000000; // Remember, set in kobo!
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const componentProps = {
		email,
		amount,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: "Pay #20,000",
		onSuccess: (response) => console.log(response.data.status),
		onClose: () => alert("CLosed!!"),
	};

	return (
		<div className="flex h-screen justify-center hero">
			<div className="flex flex-col font-sans justify-center items-center md:mx-32 text-lg w-full  md:w-1/2 bg-white">
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

export default PayButton;
