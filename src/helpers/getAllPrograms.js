import { getAllPrograms } from "../store/actions/jackRabbitActions";
import axios from "axios";
import store from "../store/store";

export const getPrograms = () => {
	return axios({
		method: "POST",
		url: "https://supermarche-chocolatine-97285.herokuapp.com/programs",
		data: {
			OrgId: process.env.REACT_APP_ORGID,
		},
	})
		.then((result) => {
			console.log(result);
			store.dispatch(getAllPrograms(result.data.rows));
		})
		.catch((error) => {
			console.log("catch", error);
		});
};
