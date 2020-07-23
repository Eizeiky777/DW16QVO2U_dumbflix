import { MOVIES } from "../constants/action-types";
import { API } from "../config/api";


export const getMovies = (e) => {
    return {
        type: MOVIES,
        payload: async () => {
        try {
            const {
            data: { data: XX },
            } = await API.get("/films/" + e);
            
            return XX;
        } catch (error) {
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};
