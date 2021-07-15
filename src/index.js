import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers/index.js";
import "./index.css";
import "./components/Header/header.css";
import "./components/Jackrabbit/jackrabbit.css";
import "./containers/About/about.css";
import "./containers/Programs/program.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/MidPageBreak/midPageBreak.css";
import "./components/StaffSection/staffSection.css";
import "./components/Footer/footer.css";
import store from "./store/store";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
