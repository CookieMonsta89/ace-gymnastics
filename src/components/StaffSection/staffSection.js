import React from "react";
import callye from "../../assets/callye.jpg";
import sam from "../../assets/sam.jpg";

const StaffSection = () => {
	return (
		<div className="staff-section-container">
			<h2>Our Staff</h2>
			<div className="staff-card-container">
				<div className="staff-card">
					<div className="card-top"></div>
					<img src={callye}></img>
					<div className="card-bottom">
						<h4>Callye Elder</h4>
						<p>Owner/Coach</p>
					</div>
				</div>
				<div className="staff-card">
					<div className="card-top"></div>
					<img src={sam}></img>
					<div className="card-bottom">
						<h4>Samantha Riffe</h4>
						<p>Coach</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StaffSection;
