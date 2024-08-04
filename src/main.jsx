import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/Details.jsx";
import ErrorNot from "./components/ErrorNot.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorNot />,
	},
	{
		path: "/details",
		element: <Details />,
	},
	{
		path: "/details/:id",
		element: <Details />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
