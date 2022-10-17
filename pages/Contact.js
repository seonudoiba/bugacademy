import React from "react";
import { useState } from "react";
const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Sending");
		let data = {
			name,
			email,
			message,
		};
		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log("Response received");
			if (res.status === 200) {
				console.log("Response succeeded!");
				setSubmitted(true);
				setName("");
				setEmail("");
				setBody("");
			}
		});
	};

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="md:h-1/5 md:p-28 p-12 hero  text-center md:text-left">
				<div className="flex flex-col items-center">
					<div className="text-2xl md:text-4xl  font-bold text-white p-2">CONTACT US</div>
					<div className="h-1 bg-red-700  w-12 ml-2 my-2"></div>
					<div className="text-lg md:font-bold text-white px-6">
						<p className="mb-8 lg:mb-16 text-center md:text-lg  md:font-semibold text-sm">
							Got a technical issue? Want to send feedback about a beta feature? Need
							details about our Business plan? Let us know.
						</p>
					</div>
				</div>
			</div>
			{/* ////////////////////////////////////////// */}
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<form action="#" className="space-y-8">
					<div>
						<label
							for="name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Your Name
						</label>
						<input
							onChange={(e) => {
								setName(e.target.value);
							}}
							type="name"
							id="name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
               text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 
               block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Name"
							required
						/>
					</div>
					<div>
						<label
							for="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Your email
						</label>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
							id="email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
               text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 
               block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="name@bugacademy.org"
							required
						/>
					</div>

					<div className="sm:col-span-2">
						<label
							for="message"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
							Your message
						</label>
						<textarea
							onChange={(e) => {
								setMessage(e.target.value);
							}}
							id="message"
							rows="6"
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Leave a comment..."></textarea>
					</div>

					<button
						onChange={handleSubmit}
						className="shadow bg-green-700 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						type="submit">
						Send message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
