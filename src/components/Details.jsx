import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "./Buttons";
// import { log } from "console";

const Details = (m) => {
	console.log(m);

	const { id } = useParams();

	const [transaction, setTransaction] = useState("");

	useEffect(() => {
		fetch(`https://bank-db.vercel.app/transactions/${id}`)
			.then((res) => res.json())
			.then((data) => setTransaction(data));
	}, [id]);
	// console.log(id);

	// console.log(transaction);
	return (
		<div className=" flex justify-center shadow-md   items-center min-h-screen   ">
			<div className="  flex   justify-around shadow-lg rounded-md  p-6 w-[30rem] items-center  gap-3  ">
				<div className=" space-y-5   ">
					<h1>
						<span className=" font-bold"> ID</span>: {transaction.id}
					</h1>
					<h1>
						<span className=" font-bold ">Amount</span>$: {transaction.amount}
					</h1>
					<h1>
						<span className="font-bold">Category</span>: {transaction.category}
					</h1>
					<h1>
						{" "}
						<span className=" font-bold">Date</span>: {transaction.date}
					</h1>
					<p className="">
						<span className=" font-bold">Description</span> :
						{transaction.description}
					</p>
				</div>
				<Buttons />
			</div>
		</div>
	);
};

export default Details;
