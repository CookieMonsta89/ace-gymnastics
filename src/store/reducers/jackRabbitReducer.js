import { FETCH_ALL_PROGRAMS } from "../actions/jackRabbitActions";

const initialState = {
	program_options: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_PROGRAMS:
			console.log("reducer here", action);
			return { program_options: action.payload };
		default:
			return state;
	}
};

export default rootReducer;
