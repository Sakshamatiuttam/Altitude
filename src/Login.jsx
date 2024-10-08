/** @format */

import axios from "axios";
import { useState } from "react";

export default function Form() {
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Data loaded successfully", formData);
		try {
			const response = await axios.post(
				"http://localhost:5000/signup",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (response) {
			}
			console.log("Data sent successfully");
		} catch (error) {
			console.error("Error sending data", error.message);
		}
	};

	return (
		<div className="flex justify-center items-center mt-20">
			<div className="flex flex-col items-center justify-center p-8 bg-gray-200 w-[400px]">
				<h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
				<form onSubmit={handleSubmit} className="w-full max-w-lg">
					<div className="mb-4">
						<label
							htmlFor="fullname"
							className="block text-gray-700 text-sm font-bold mb-2">
							Name
						</label>
						<input
							type="text"
							id="fullname"
							name="fullname"
							value={formData.fullname}
							onChange={handleInputChange}
							className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="Enter your name"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 text-sm font-bold mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="Enter your email"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
							className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="Enter your password"
						/>
					</div>

					<div className="flex items-center justify-center ">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
