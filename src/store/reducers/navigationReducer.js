import { SET_ACTIVE_LINK } from "../actions/navigationActions";

const initialState = {
	activeLink: "Home",
	// toggleNav: "link-tab"
};

const navigationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_LINK:
			return { ...state, activeLink: action.payload };
		default:
			return state;
	}
};

export default navigationReducer;
