/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./nav.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Nav />
		<App />
	</StrictMode>
);
