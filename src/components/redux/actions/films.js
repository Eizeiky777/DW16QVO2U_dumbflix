import { TV, TVDETAIL} from "../constants/action-types";
import { API, setAuthToken } from "../config/api";



export const getTv = (e) => {
    return {
        type: TV,
        payload: async () => {  
        try {
            // const {
            // data: { data },
            // } = await API.post("/register", user);

            // localStorage.setItem("token", data.token);
            // setAuthToken(data.token); //Set header token
            const {
            data: { data },
            } = await API.get("/films/"+e);
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


export const getDetailTv = (e) => {
    
    return {
        type: TVDETAIL,
        payload: async () => {  
        try {
            const token = localStorage.getItem("token");
            setAuthToken( token ); // Set header token

            const {
            data: { data },
            } = await API.get("/film/" + e + "/episodes");
            
            return data;
        } catch (error) {   
            if (error.response) {
            const { data, status } = error.response;
                //console.log(data.message)

            if (status > 399) throw data.message;
                
            }
        }
        },
    };
};

// router.get("/films/detail/:idFilm", detailFilm);

    
