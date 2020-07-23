import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-section contact">
				<h4>Contact:</h4>
				<p>
					<a href="tel:502-252-8512">502-252-8512</a>
				</p>
				<p>160 Iroquois Trail</p>
				<p>Bloomfield, KY 40008</p>
			</div>
			<div className="footer-section about-us">
				<h3>
					<em>ACE Gymnastics where kids are Active, Confident, Empowered!</em>
				</h3>
			</div>
			<div className="footer-section social">
				<h4>Follow Us:</h4>
				<div className="social-links">
					<a
						href="https://www.facebook.com/ACE-Gymnastics-101806134601903/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faFacebookSquare} color="white" size="2x" />
					</a>
					<a
						href="https://www.instagram.com/ace.gymnastics/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
