import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

const Hero = ({}) => {
	console.log(query);

	const [data, setData] = useState([]);
	const Url = "https://bank-db.vercel.app/transactions";
	useEffect(() => {
		fetch(Url)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				console.log("test", data);
			});
	}, []);
	function handleClicked() {
		console.log(alert("hell"));
	}

	return (
		<main className=" mt-[6rem] justify-center items-center md:m-46 ">
			<div className="grid grid-rows-6  grid-flow-col  justify-center md:flex flex-wrap   ">
				{data
					// Filterng Method
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
