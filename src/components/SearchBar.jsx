import React, { useMemo, useState } from "react";

function SearchBar({ query, setQuery }) {
	// console.log(query);

	// const filletedItems = useMemo(() => {
	// 	ret;
	// });

	return (
		<div className="relative mt-2 rounded-md shadow-sm ">
			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<svg
					width="12"
					height="12"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					></path>
				</svg>
			</div>
			<input
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				type="text"
				className="flex  w-full rounded-md border-0 py-1.5 pl-7 pr-5 md:pr-20  ring-1 ring-inset  placeholder:text-gray-400 focus:ring-0 focus:none focus:ring-indigo-100 sm:text-sm sm:leading-6 p-6"
				placeholder="Search "
			></input>
		</div>
	);
}
export default SearchBar;
