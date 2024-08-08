import React, { useEffect, useState } from "react";
import { Url } from "./Hero";
// import { Url } from "./Hero";
// import { json } from "react-router-dom";
// import axios from "axios";

// interface FormData {
// 	id: number;
// 	date?: number;
// 	description: string;
// 	amount: number;
// }

function Form({ data, setData }) {
	// console.log("params", id);ta, setData }) {
	// console.log(data);

	const [formData, setFormData] = useState({
		id: 0,
		date: "",
		description: "",
		category: "",
		amount: 0,
	});
	// setFormData("");
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		console.log("hello");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(Url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((transaction) => setData([...data, transaction]));
		setFormData("");
	};

	return (
		<div className=" shadow-md m-5">
			<form
				onSubmit={handleSubmit}
				className=" flex flex-col justify-center  items-center  p-6  space-y-4   "
			>
				<label htmlFor="" className=" mt-2 flex  font-bold">
					Description
				</label>
				<input
					// onChange={handleChange}
					type="Description"
					name="description"
					id=""
					placeholder=" Description"
					className="w-[25rem]  p-3 border border-gray-300 rounded-lg focus:outline-none"
					onChange={handleChange}
				/>
				<label htmlFor="" className=" mt-2 font-bold">
					{" "}
					Amount
				</label>
				<input
					type="number"
					name="amount"
					placeholder="Amount Spent"
					onChange={handleChange}
					id=""
					className="
					w-[25rem]
					p-3
					border
					border-gray-300
					rounded-lg
					focus:outline-none"
				/>
				<label htmlFor="" className=" mt-2 font-bold">
					Category
				</label>
				<input
					type="text"
					name="category"
					placeholder="Category"
					onChange={handleChange}
					className="w-[25rem]  p-3 border border-gray-300  rounded-lg focus:outline-none"
					id=""
				/>
				<label className=" mt-2 font-bold"> Date</label>

				<input
					onChange={handleChange}
					type="date"
					name="date"
					placeholder="Date"
					className="w-[25rem]  p-3 border border-gray-300 rounded-lg focus:outline-none"
					id=""
				/>
				<button
					className=" font-bold  items-center m-4 w-52 justify-center flex-row-reverse hover:bg-slate-400  flex p-4 rounded-md  border border-gray-300 focus:outline-none "
					type="submit"
				>
					<span className="pl-2 ">
						<svg
							width="14"
							height="14"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</span>
					Send
				</button>
			</form>
		</div>
	);
}

export default Form;
