import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import jackRabbitReducer from "./jackRabbitReducer";

export default combineReducers({
	rootReducer,
	jackRabbitReducer,
});
