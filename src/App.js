import React from "react";
import "./App.css";
import tumbling from "./assets/tumbling.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={tumbling} alt="tumbling-logo" />
				<h2>ACE GYMNASTICS!! COMING SOON!!</h2>
				<div>
					<h4>Open House:</h4>
					<p>December 14th, 1pm - 3pm</p>
				</div>
				<div className="icon-logos">
					<a href="mailto: office@ace-gymnastics.com">
						<FontAwesomeIcon icon={faEnvelope} color="white" size="2x" />
					</a>
					<a
						href="https://www.facebook.com/ACE-Gymnastics-101806134601903/"
						target="_blank"
					>
						<FontAwesomeIcon icon={faFacebookSquare} color="white" size="2x" />
					</a>
					<a href="https://www.instagram.com/ace.gymnastics/" target="_blank">
						<FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
					</a>
					<a href="tel:502-252-8512">
						<FontAwesomeIcon icon={faPhoneSquare} color="white" size="2x" />
					</a>
				</div>
			</header>
		</div>
	);
}

export default App;
