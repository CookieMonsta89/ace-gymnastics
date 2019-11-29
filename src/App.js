import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import ContactHeader from "./components/Header/contactheader";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<ContactHeader />
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/About" />
				<Route path="/Staff" />
				<Route path="/Programs" />
			</div>
		);
	}
}

export default App;
