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
import { connect } from "react-redux";
import ReactGA from "react-ga";
import { getPrograms } from "./helpers/getAllPrograms";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	componentDidMount = () => {
		this.initializeReactGA();
		getPrograms();
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
				<Route exact path="/Programs" component={ProgramContainer} />
				<Footer />
				<Copyright />
			</ScrollAnimation>
		);
	}
}

const mapStateToProps = (state) => ({
	message: state.rootReducer.message,
});

const mapDispatchToProps = {};

// add this to line 47 to use portal announcement
// {menuOpen ? null : <PortalContainer />}

export default connect(mapStateToProps, mapDispatchToProps)(App);
