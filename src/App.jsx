/** @format */
import { Routes, Route } from "react-router-dom";
import Login from "./Login"; // Import your Login component
import Landing from "./Landing.jsx"; // Assuming you have a Home component

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} /> {/* Home Page */}
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default App;
