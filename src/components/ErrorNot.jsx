import React from "react";
import { Link } from "react-router-dom";

function ErrorNot() {
	return (
		<div className=" flex justify-center text-center items-center mt-9 font-extrabold rounded-md space-x-4 shadow-md p-[54px] m-8 bg-slate-400 ">
			{" "}
			<h1 className=" text-4xl ">404 Not Found</h1>
			<Link
				className=" list-none text-indigo-200 hover:underline text-2xl "
				to="/"
			>
				Click here...
			</Link>
		</div>
	);
}

export default ErrorNot;
