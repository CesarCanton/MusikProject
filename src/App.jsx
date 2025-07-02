import { useState } from "react";
import "./App.css";
import MainScreen from "./components/MainScreen";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<NavBar />
							<MainScreen />
						</>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<RegisterForm />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
