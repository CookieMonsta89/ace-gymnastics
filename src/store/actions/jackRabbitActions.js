export const FETCH_ALL_PROGRAMS = "FETCH_ALL_PROGRAMS";

export function getAllPrograms(request) {
	console.log("action", request);
	return {
		type: FETCH_ALL_PROGRAMS,
		payload: request,
	};
}
