import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./components/Header/header.css";
import "./components/Jackrabbit/jackrabbit.css";
import "./containers/About/about.css";
import "./containers/Programs/program.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
