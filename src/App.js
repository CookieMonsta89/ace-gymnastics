import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route } from "react-router-dom";

function App() {
	console.log(window.screen.width, "window");
	return (
		<div className="App">
			<Header />
			<Route path="/" />
			<Route path="/About" />
		</div>
	);
}

export default App;
