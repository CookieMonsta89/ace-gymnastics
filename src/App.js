import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import ContactHeader from "./components/Header/contactheader";
import Footer from "./components/Footer/footer";
import Copyright from "./components/Footer/copyright";
import ScrollAnimation from "react-animate-on-scroll";
// import ProgramContainer from "./containers/Programs/program";
// import AboutContainer from "./containers/About/About";
// import StaffContainer from "./containers/Staff/Staff";
import PortalContainer from "./containers/Portal/PortalContainer";
import ReactGA from "react-ga";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {
		alert(process.env.REACT_APP_GA_TRACKING);
		this.initializeReactGA();
	};

	initializeReactGA = () => {
		ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
		ReactGA.pageview("/");
	};

	render() {
		return (
			<ScrollAnimation animateOnce={true} animateIn="fadeIn" className="App">
				<ContactHeader />
				<Header />

				<Route exact path="/" component={Home} />
				<Footer />
				<Copyright />
			</ScrollAnimation>
		);
	}
}

export default App;
