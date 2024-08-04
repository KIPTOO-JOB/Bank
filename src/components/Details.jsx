import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = (prop) => {
	// console.log(prop);
	// const id = useLocation();
	// console.log(id);	// const i = location.pathname.split("/")[2];

	const { id } = useParams();

	console.log("params", id);

	const [transaction, setTransaction] = useState("");

	useEffect(() => {
		fetch(`http://localhost:3000/transactions/${id}`)
			.then((res) => res.json())
			.then((data) => setTransaction(data));
	}, []);

	console.log(transaction);
	return (
		<div className=" flex justify-center shadow-md p-6  items-center min-h-screen  ">
			<div className="  flex flex-col  justify-center shadow-md p-6  items-center min-h-[50vh]  ">
				<h1>{transaction.amount}</h1>
				<h1>{transaction.category}</h1>
				<h1>{transaction.date}</h1>
				<h1 className=" ">{transaction.description}</h1>
				<Link to="/" className=" justify-center text-center">
					<button className=" shadow-md p-4 flex flex-row justify-center  items-center rounded-md mt-3 font-bold text-center ">
						{" "}
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
								fill="currentColor"
								fill-rule="evenodd"
								clip-rule="evenodd"
							>
								{" "}
							</path>
						</svg>{" "}
						previous
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Details;
