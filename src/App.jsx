import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
	const [query, setQuery] = useState("");
	return (
		<main>
			<div>
				<Navbar query={query} setQuery={setQuery} />
			</div>
			<div>
				<Hero query={query} />
			</div>
		</main>
	);
}

export default App;
