export const SET_ACTIVE_LINK = "SAY_HELLO";

export function setActiveLink(activeLink) {
	return {
		type: SET_ACTIVE_LINK,
		payload: activeLink,
	};
}
