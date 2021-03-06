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
import ReactGA from "react-ga";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	componentDidMount = () => {
		// initializes Google Analytics
		this.initializeReactGA();
	};

	initializeReactGA = () => {
		ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
		ReactGA.pageview("/");
	};

	toggleMenu = () => {
		const { menuOpen } = this.state;
		this.setState({
			menuOpen: !menuOpen,
		});
	};

	render() {
		return (
			<ScrollAnimation animateOnce={true} animateIn="fadeIn" className="App">
				<ContactHeader />
				<Header toggleMenu={this.toggleMenu} />
				<Route exact path="/" component={Home} />
				<Footer />
				<Copyright />
			</ScrollAnimation>
		);
	}
}

// add this to line 47 to use portal announcement
// {menuOpen ? null : <PortalContainer />}

export default App;
