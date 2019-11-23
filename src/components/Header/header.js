import React from "react";
import placeholder from "../../assets/placeholder.gif";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
			toggleNav: "link-tab"
		};
	}

	handleClickTab = () => {
		const { toggleNav } = this.state;
		this.setState({
			toggleNav: toggleNav === "link-tab" ? "link-tab-open" : "link-tab"
		});
	};

	render() {
		const { toggleNav } = this.state;
		return (
			<div className="header-container">
				<div className="link-container">
					<span className="logo-container">
						<img src={placeholder} alt="logo" />
					</span>
					<span className="hamburger" onClick={this.handleClickTab}>
						<FontAwesomeIcon icon={faBars} color="white" size="2x" />
					</span>
					<div className={toggleNav}>
						<div className="navlink">
							<Link className="link" to="/">
								Home
							</Link>
						</div>
						<div className="navlink">Team</div>
						<div className="navlink">Link</div>
						<div className="navlink">
							<Link className="link" to="About">
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
