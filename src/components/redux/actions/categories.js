import { CATEGORIES } from "../constants/action-types";
import { API } from "../config/api";
// import { API, setAuthToken } from "../config/api";
// import axios from "axios";
// // Set config defaults when creating the instance
// export const API = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
// });
// // Alter defaults after instance has been created
// export const setAuthToken = (token) => {
//   API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

export const listCategories = () => {
    return {
        type: CATEGORIES,
        payload: async () => {
        try {
            const {
            data: { data },
            } = await API.get("/category");
            return data;
            
        } catch (error) {
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};
