import React from "react";
import program1 from "../../assets/program1comp.jpg";
import program2 from "../../assets/program2comp.jpg";
import program4 from "../../assets/program4comp.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "./programcards.css";

const ProgramCards = () => {
	return (
		<div className="program-cards">
			<ScrollAnimation
				animatePreScroll={true}
				animateOnce={true}
				animateIn="fadeIn"
				className="program-image program-photo"
			>
				<img src={program2} alt="personflipping" />
				<button className="button account-button">Boys Recreational</button>
			</ScrollAnimation>
			<ScrollAnimation
				animatePreScroll={true}
				animateOnce={true}
				animateIn="fadeIn"
				className="program-image program-photo"
			>
				<img src={program1} alt="personflipping" />
				<button className="button account-button">Girls Recreational</button>
			</ScrollAnimation>
			<ScrollAnimation
				animatePreScroll={true}
				animateOnce={true}
				animateIn="fadeIn"
				className="program-image program-photo"
			>
				<img src={program4} alt="personflipping" />
				<button className="button account-button">Tumbling</button>
			</ScrollAnimation>
			<ScrollAnimation
				animatePreScroll={true}
				animateOnce={true}
				animateIn="fadeIn"
				className="program-image program-photo"
			>
				<img src={program4} alt="personflipping" />
				<button className="button account-button">
					Competitive Gymnastics
				</button>
			</ScrollAnimation>
		</div>
	);
};

export default ProgramCards;
