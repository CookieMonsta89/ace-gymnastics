import React from "react";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";

const ProgramSection = () => {
	return (
		<div className="home-program">
			<div className="program-section">
				<div className="program-image">
					<img src={program2} />
					<h3>Recreational Gymnastics</h3>
				</div>
				<div className="program-image">
					<img src={program1} />
					<h3>Tumbling</h3>
				</div>
				<div className="program-image">
					<img src={program3} />
					<h3>Yoga Flow</h3>
				</div>
			</div>
			<div className="program-section-button">
				<button className="button account-button">View More</button>
			</div>
		</div>
	);
};

export default ProgramSection;
