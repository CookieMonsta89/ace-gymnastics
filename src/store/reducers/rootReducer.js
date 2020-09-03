import { SAY_HELLO, SAY_BYE } from "../actions/rootReducerActions";

const initialState = {
	message: "Eureka!!",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAY_HELLO:
			return { ...state, message: "Hello" };
		case SAY_BYE:
			return { ...state, message: "Bye" };
		default:
			return state;
	}
};

export default rootReducer;
