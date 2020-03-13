import React from "react";
import gymfloor from "../../assets/gym-floorcomp.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const AboutSection = () => {
	return (
		<div className="home-about">
			<ScrollAnimation
				animatePreScroll={window.innerWidth <= 500}
				animateOnce={true}
				animateIn="fadeIn"
				className="about-section"
				initiallyVisible={true}
			>
				<h2>About Us</h2>
				<p>
					Family owned and operated, ACE Gymnastics is a multifunctional
					facility located in Bloomfield, Ky. We welcome students of all
					abilities from 18 months to 18 years offering gymnastics, tumbling,
					birthday parties, special events, and more!
				</p>
				<button className="button account-button">View More</button>
			</ScrollAnimation>
			<ScrollAnimation
				animatePreScroll={true}
				animateOnce={true}
				animateIn="fadeIn"
				className="about-img-section"
				initiallyVisible={true}
			>
				<img src={gymfloor} alt="gym-floor" />
			</ScrollAnimation>
		</div>
	);
};

export default AboutSection;
