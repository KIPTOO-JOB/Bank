import SearchBar from "./SearchBar";

const Navbar = ({ query, setQuery }) => {
	return (
		<nav className=" justify-center  shadow-md rounded-md items-center text-center  p-3 fixed top-0  w-full bg-slate-50  z-50 ">
			<ul className=" flex flex-row justify-between md:justify-around  items-center  ">
				<li className=" font-bold ">
					<a href="">FLARTIRON BANK 🏦 💸 </a>
				</li>
				<div className=" shadow-md  ">
					<SearchBar query={query} setQuery={setQuery} />
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
