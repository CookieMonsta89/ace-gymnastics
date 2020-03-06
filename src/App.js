import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import ContactHeader from "./components/Header/contactheader";
import Footer from "./components/Footer/footer";
import Copyright from "./components/Footer/copyright";
import ScrollAnimation from "react-animate-on-scroll";
import ProgramContainer from "./containers/Programs/Program";
import AboutContainer from "./containers/About/About";
import StaffContainer from "./containers/Staff/Staff";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ScrollAnimation animateOnce={true} animateIn="fadeIn" className="App">
				<ContactHeader />
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/About" component={AboutContainer} />
				<Route path="/Staff" component={StaffContainer} />
				<Route path="/Programs" component={ProgramContainer} />
				<Footer />
				<Copyright />
			</ScrollAnimation>
		);
	}
}

export default App;
