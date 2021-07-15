import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./store/store";
// import store from "./store/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById("root")
);
