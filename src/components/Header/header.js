import React from "react";
import logofull from "../../assets/logofull.png";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jackrabbit from "../../components/Jackrabbit/jackrabbit";
import JackrabbitMobile from "../../components/Jackrabbit/jackrabbitMobile";
import { Animated } from "react-animated-css";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleNav: "link-tab",
			activeLink: "Home"
		};
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log(window);
		if (prevState.activeLink !== this.state.activeLink) {
			this.setState({
				toggleNav: "link-tab",
				activeLink: window.location.href.split("/")[
					window.location.href.split("/").length - 1
				]
			});
		}
	};

	handleClickTab = () => {
		const { toggleNav } = this.state;
		this.setState({
			toggleNav: toggleNav === "link-tab" ? "link-tab-open" : "link-tab"
		});
	};

	selectActiveLink = () => {
		this.setState({
			activeLink: window.location.href.split("/")[
				window.location.href.split("/").length - 1
			]
		});
	};

	activeObject = active => {
		const { activeLink } = this.state;
		const newActive = window.location.href.split("/")[
			window.location.href.split("/").length - 1
		];
		let object = {
			borderBottom: "1px solid white",
			fontWeight: "bold"
		};
		let object2 = {
			borderBottom: "0px solid white",
			background: "white",
			color: "#9a0b0b",
			fontWeight: "bold",
			transition: "all .5s"
		};
		if (newActive === active && window.innerWidth > 768) {
			return object;
		}
		if (newActive === active && window.innerWidth < 768) {
			console.log("2", newActive, active);
			return object2;
		}
	};

	render() {
		const { toggleNav } = this.state;
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
					<Animated
						animationIn="fadeIn"
						animationOut="bounceOutLeft"
						className={toggleNav}
					>
						<div
							className="navlink"
							style={this.activeObject("")}
							onClick={() => this.selectActiveLink()}
						>
							<Link className="link" to="/" style={this.activeObject("")}>
								HOME
							</Link>
						</div>
						<div
							className="navlink"
							name="about"
							style={this.activeObject("About")}
							onClick={() => this.selectActiveLink()}
						>
							<Link
								className="link"
								to="About"
								style={this.activeObject("About")}
							>
								ABOUT
							</Link>
						</div>
						<div
							className="navlink"
							style={this.activeObject("Staff")}
							onClick={() => this.selectActiveLink()}
						>
							<Link
								className="link"
								to="Staff"
								style={this.activeObject("Staff")}
							>
								STAFF
							</Link>
						</div>
						<div
							className="navlink"
							style={this.activeObject("Programs")}
							onClick={() => this.selectActiveLink()}
						>
							<Link
								className="link"
								to="Programs"
								style={this.activeObject("Programs")}
							>
								PROGRAMS
							</Link>
						</div>
						<JackrabbitMobile />
					</Animated>
					<Jackrabbit />
				</div>
			</div>
		);
	}
}

export default Header;
