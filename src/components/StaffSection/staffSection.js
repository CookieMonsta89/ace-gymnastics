import React from "react";
import callye from "../../assets/callyecomp.jpg";
import sam from "../../assets/samcomp.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "./staffSection.css";

const StaffSection = () => {
	return (
		<div className="staff-section-container">
			<h2>Our Staff</h2>
			<div className="staff-card-container">
				<ScrollAnimation
					animateOnce={true}
					animateIn="fadeIn"
					className="staff-card"
				>
					<div className="card-top"></div>
					<img src={callye} alt="callye"></img>
					<div className="card-bottom">
						<h4>Callye Elder</h4>
						<p>Owner/Coach</p>
					</div>
				</ScrollAnimation>
				<ScrollAnimation
					animateOnce={true}
					animateIn="fadeIn"
					className="staff-card"
				>
					<div className="card-top"></div>
					<img src={sam} alt="sam"></img>
					<div className="card-bottom">
						<h4>Samantha Riffe</h4>
						<p>Gym Manager/Coach</p>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
};

export default StaffSection;
