import { getAllPrograms } from "../store/actions/jackRabbitActions";
import axios from "axios";

export const getPrograms = () => {
	axios({
		method: "POST",
		url: "https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJson",
		headers: {},
		body: {
			OrgId: 539177,
		},
	}).then((result) => {
		getAllPrograms(result);
	});
};
