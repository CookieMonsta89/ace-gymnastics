import React from "react";
import program1 from "../../assets/program1comp.jpg";
import program2 from "../../assets/program2comp.jpg";
import program4 from "../../assets/program4comp.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import "./programSection.css";

const ProgramSection = () => {
	return (
		<div className="home-program">
			<div className="program-section">
				<ScrollAnimation
					animatePreScroll={false}
					animateOnce={true}
					animateIn="fadeIn"
					className="program-image"
				>
					<img src={program2} alt="personflipping" />
					<h3>Recreational Gymnastics</h3>
				</ScrollAnimation>
				<ScrollAnimation
					animatePreScroll={false}
					animateOnce={true}
					animateIn="fadeIn"
					className="program-image"
				>
					<img src={program1} alt="personflipping" />
					<h3>Tumbling</h3>
				</ScrollAnimation>
				<ScrollAnimation
					animatePreScroll={false}
					animateOnce={true}
					animateIn="fadeIn"
					className="program-image"
				>
					<img src={program4} alt="personflipping" />
					<h3>Competitive Gymnastics</h3>
				</ScrollAnimation>
			</div>
			<div className="program-section-button">
				<button className="button account-button">
					<Link className="link" to="Programs">
						PROGRAMS
					</Link>
				</button>
			</div>
		</div>
	);
};

export default ProgramSection;
