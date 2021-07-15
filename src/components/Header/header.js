import React from "react";
import { connect } from "react-redux";
import logofull from "../../assets/logofull.png";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jackrabbit from "../../components/Jackrabbit/jackrabbit";
import JackrabbitMobile from "../../components/Jackrabbit/jackrabbitMobile";
import { Animated } from "react-animated-css";
import "./header.css";
import { setActiveLink } from "../../store/actions/navigationActions";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleNav: "link-tab",
		};
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.activeLink !== this.props.activeLink) {
			this.setState({
				toggleNav: "link-tab",
			});
		}
	};

	handleClickTab = () => {
		const { toggleNav } = this.state;
		const { toggleMenu } = this.props;
		this.setState({
			toggleNav: toggleNav === "link-tab" ? "link-tab-open" : "link-tab",
		});
		toggleMenu();
	};

	selectActiveLink = (event) => {
		this.props.setActiveLink(event.target.name);
		this.setState({
			activeLink:
				window.location.href.split("/")[
					window.location.href.split("/").length - 1
				],
		});
	};

	activeObject = (active) => {
		// const newActive =
		// 	window.location.href.split("/")[
		// 		window.location.href.split("/").length - 1
		// 	];
		const newActive = this.props.activeLink;
		let object = {
			fontWeight: "bold",
			backgroundColor: "white",
			color: "#a02424",
			borderRadius: "5px",
		};
		let object2 = {
			background: "white",
			color: "#9a0b0b",
			fontWeight: "bold",
			transition: "all .5s",
		};
		if (newActive === active && window.innerWidth > 768) {
			return object;
		}
		if (newActive === active && window.innerWidth < 768) {
			return object2;
		}
	};

	render() {
		const { toggleNav } = this.state;
		return (
			<div className="header-container">
				<div className="link-container">
					<span className="logo-container">
						<Link>
							<img src={logofull} alt="logo" />
						</Link>
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
						<div className="navlink" style={this.activeObject("Home")}>
							<Link
								className="link"
								to="/"
								style={this.activeObject("Home")}
								onClick={(e) => this.selectActiveLink(e)}
								name="Home"
							>
								HOME
							</Link>
						</div>
						<div
							className="navlink"
							name="about"
							style={this.activeObject("About")}
						>
							<Link
								className="link"
								// to="About"
								style={this.activeObject("About")}
								onClick={(e) => this.selectActiveLink(e)}
								name="About"
							>
								ABOUT
							</Link>
						</div>
						<div className="navlink" style={this.activeObject("Staff")}>
							<Link
								className="link"
								// to="Staff"
								style={this.activeObject("Staff")}
								onClick={(e) => this.selectActiveLink(e)}
								name="Staff"
							>
								STAFF
							</Link>
						</div>
						<div className="navlink" style={this.activeObject("Programs")}>
							<Link
								className="link"
								to="Programs"
								style={this.activeObject("Programs")}
								onClick={(e) => this.selectActiveLink(e)}
								name="Programs"
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

const mapStateToProps = (state) => ({
	activeLink: state.navigationReducer.activeLink,
});

const mapDispatchToProps = (dispatch) => {
	return {
		setActiveLink: (link) => dispatch(setActiveLink(link)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
