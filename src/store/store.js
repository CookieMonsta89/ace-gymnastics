import { createStore } from "redux";
import reducer from "../store/reducers/index";
import { devToolsEnhancer } from "redux-devtools-extension";

export default createStore(reducer, devToolsEnhancer());
