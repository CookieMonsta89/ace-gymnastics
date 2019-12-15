import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-section contact">
				<h4>Contact:</h4>
				<p>502-252-8512</p>
				<p>123 bloomfield rd</p>
				<p>Bloomfield, KY 40333</p>
			</div>
			<div className="footer-section about-us">
				<h4>About Us:</h4>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
			</div>
			<div className="footer-section social">
				<h4>Follow Us:</h4>
				<div className="social-links">
					<a
						href="https://www.facebook.com/ACE-Gymnastics-101806134601903/"
						target="_blank"
					>
						<FontAwesomeIcon icon={faFacebookSquare} color="white" size="2x" />
					</a>
					<a href="https://www.instagram.com/ace.gymnastics/" target="_blank">
						<FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
