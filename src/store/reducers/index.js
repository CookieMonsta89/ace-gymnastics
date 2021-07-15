import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import jackRabbitReducer from "./jackRabbitReducer";
import navigationReducer from "./navigationReducer";

export default combineReducers({
	rootReducer,
	jackRabbitReducer,
	navigationReducer,
});
