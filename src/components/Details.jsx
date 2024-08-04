import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "./Buttons";

const Details = (prop) => {
	// console.log(prop);
	// const id = useLocation();
	// console.log(id);	// const i = location.pathname.split("/")[2];

	const { id } = useParams();

	// console.log("params", id);

	const [transaction, setTransaction] = useState("");

	useEffect(() => {
		fetch(`https://bank-db.vercel.app/transactions/${id}`)
			.then((res) => res.json())
			.then((data) => setTransaction(data));
	}, []);

	// console.log(transaction);
	return (
		<div className=" flex justify-center shadow-md p-7  items-center min-h-screen   ">
			<div className="  flex   justify-around shadow-lg rounded-md  p-6 w-[30rem] items-center  gap-3  ">
				<div className=" space-y-5">
					<h1>Amount: {transaction.amount}</h1>
					<h1>Category : {transaction.category}</h1>
					<h1>Date: {transaction.date}</h1>
					<p className=" leading-4 ">{transaction.description}</p>
				</div>
				<Buttons />
			</div>
		</div>
	);
};

export default Details;
