import React from "react";
import gymfloor from "../../assets/gymfloor.jpg";

const AboutSection = () => {
	return (
		<div className="home-about">
			<div className="about-section">
				<h2>About Us</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<p>
					It has survived not only five centuries, but also the leap into
					electronic typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem
					Ipsum.
				</p>
				<button className="button account-button">View More</button>
			</div>
			<div className="about-img-section">
				<img src={gymfloor} alt="gym-floor" />
			</div>
		</div>
	);
};

export default AboutSection;
