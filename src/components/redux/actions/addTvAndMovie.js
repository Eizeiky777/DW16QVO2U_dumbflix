import { ADDTVMOVIE, ADDEPISODETVMOVIE } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";
// import moment from 'moment';

//title, file, year, categoryId, description, titleEpisode, fileEpisode, linkEpisode
export const postTvMovie = ( film, episode ) => {
    return {
        type: ADDTVMOVIE,
        payload: async () => {
        try {
            setAuthToken( localStorage.getItem("token") );

            const { title, fileFilm, year, categoryId, description } = film;

            let cat = categoryId === "Tv Show" ? "1" : "2";

            const formData = new FormData();

            formData.append("title", title);
            formData.append("thumbnailFilm", fileFilm);
            formData.append("year", year);
            formData.append("categoryId", cat);
            formData.append("description", description);

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            
            const {
            data: { data },
            } = await API.post("/films/add", formData, config);

            const ids = data.id;
            // console.log(ids)

            for ( let i = 0; i < episode.length; i++){
                const { titleEpisode, fileEpisode, linkEpisode  } = episode[i];

                const formDataEpisode = new FormData();
                formDataEpisode.append("title", titleEpisode);
                formDataEpisode.append("thumbnailFilm", fileEpisode);
                formDataEpisode.append("linkFilm", linkEpisode);
                formDataEpisode.append("filmId", ids);

                await API.post("/episodes/add", formDataEpisode, config);
            }
            
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

export const postEpisodeTvMovie = ( dataAddEpisode, id ) => {
    return {
        type: ADDEPISODETVMOVIE,
        payload: async () => {
        try {
            setAuthToken( localStorage.getItem("token") );

            const { titleEpisode, fileEpisode, linkEpisode  } = dataAddEpisode;

            const formDataEpisode = new FormData();
            formDataEpisode.append("title", titleEpisode);
            formDataEpisode.append("thumbnailFilm", fileEpisode);
            formDataEpisode.append("linkFilm", linkEpisode);
            formDataEpisode.append("filmId", id);

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };

            const {
            data: { data: dataEpisode },
            } = await API.post("/episodes/add", formDataEpisode, config);
            
            return dataEpisode;
        } catch (error) {
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};

