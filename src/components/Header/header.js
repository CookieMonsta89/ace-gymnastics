import React from "react";
import logofull from "../../assets/logofull.png";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// <div className="contact-banner">
// 				<a href="tel:502-271-8934">502-271-8934</a>
// 				<a href="mailto: office@ace-gymnastics.com">
// 					office@ace-gymnastics.com
// 				</a>
// 			</div>
// <div className="menu-container">
// 						<span className="logo-container">
// 							<img src={placeholder} alt="logo" />
// 						</span>
// 						<FontAwesomeIcon icon={faBars} color="white" size="1x" />
// 					</div>

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleNav: "link-tab",
			activeLink: "home"
		};
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log("updated", prevProps, prevState, this.state);
		if (prevState.activeLink !== this.state.activeLink) {
			this.setState({
				toggleNav: "link-tab"
			});
		}
	};

	handleClickTab = () => {
		const { toggleNav } = this.state;
		this.setState({
			toggleNav: toggleNav === "link-tab" ? "link-tab-open" : "link-tab"
		});
	};

	selectActiveLink = param => {
		this.setState({
			activeLink: param
		});
	};

	activeObject = active => {
		const { activeLink } = this.state;
		let object = {
			borderBottom: "3px solid white"
		};
		let object2 = {
			borderBottom: "0px solid white",
			background: "white",
			color: "#9a0b0b",
			transition: "all .5s"
		};
		if (activeLink === active && window.screen.width >= 768) {
			return object;
		}
		if (activeLink === active && window.screen.width < 768) {
			return object2;
		}
	};

	render() {
		const { toggleNav } = this.state;
		console.log(window.screen.width);
		return (
			<div className="header-container">
				<div className="link-container">
					<span className="logo-container">
						<img src={logofull} alt="logo" />
					</span>
					<span className="hamburger" onClick={this.handleClickTab}>
						<FontAwesomeIcon
							icon={toggleNav === "link-tab-open" ? faTimes : faBars}
							color="white"
							size="2x"
						/>
					</span>
					<div className={toggleNav}>
						<div
							className="navlink"
							style={this.activeObject("home")}
							onClick={() => this.selectActiveLink("home")}
						>
							<Link className="link" to="/" style={this.activeObject("home")}>
								Home
							</Link>
						</div>
						<div
							className="navlink"
							style={this.activeObject("team")}
							onClick={() => this.selectActiveLink("team")}
						>
							Team
						</div>
						<div
							className="navlink"
							style={this.activeObject("link")}
							onClick={() => this.selectActiveLink("link")}
						>
							Link
						</div>
						<div
							className="navlink"
							name="about"
							style={this.activeObject("about")}
							onClick={() => this.selectActiveLink("about")}
						>
							<Link
								className="link"
								to="About"
								style={this.activeObject("about")}
							>
								About
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
