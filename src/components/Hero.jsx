import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import Form from "./Form";
export const Url = "https://bank-db.vercel.app/transactions";
const Hero = ({ query }) => {
	// console.log(query);

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(Url)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				// console.log("test", data);
			});
	}, []);

	return (
		<main className=" mt-[6rem] justify-center items-center md:m-46 ">
			<Form data={data} setData={setData} />
			<div className="grid grid-rows-6  grid-flow-col  justify-center sm:flex-row  md:flex flex-wrap   ">
				{data
					// Filterng
					.filter((data) =>
						data.category.toLowerCase().includes(query.toLowerCase())
					)
					.map((data) => (
						<div key={data.id}>
							<div>
								<Link to={`/details/${data.id}`}>
									<div className=" shadow-md items-center justify-center flex p-10 m-4 bg-gray-300 rounded-md lg:flex-wrap w-[15rem] flex-col  ">
										<h1 className=" font-bold">{data.category}</h1>
										<h1 className=" text-sm hover:underline hover:text-blue-500 ">
											{" "}
											Click for more details.
										</h1>
									</div>
								</Link>
							</div>
						</div>
					))}
			</div>
		</main>
	);
};

export default Hero;
