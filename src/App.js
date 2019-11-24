import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/About" />
		</div>
	);
}

export default App;
