import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const ContactHeader = () => {
	return (
		<div className="contact-header">
			<div>
				<FontAwesomeIcon icon={faPhoneSquare} color="#a02424" size="1x" />
				<a href="tel:502-252-8512">502-252-8512</a>
			</div>
			<div>
				<FontAwesomeIcon icon={faEnvelope} color="#a02424" size="1x" />
				<a href="mailto: office@ace-gymnastics.com">Email Us</a>
			</div>
		</div>
	);
};

export default ContactHeader;
