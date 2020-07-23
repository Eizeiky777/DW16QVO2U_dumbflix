import { ADDTVMOVIE, ADDEPISODETVMOVIE } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const ADDTVMOVIE_PENDING = `${ADDTVMOVIE}_${ActionType.Pending}`;
const ADDTVMOVIE_FULFILLED = `${ADDTVMOVIE}_${ActionType.Fulfilled}`;
const ADDTVMOVIE_REJECTED = `${ADDTVMOVIE}_${ActionType.Rejected}`;

const ADDEPISODETVMOVIE_PENDING = `${ADDEPISODETVMOVIE}_${ActionType.Pending}`;
const ADDEPISODETVMOVIE_FULFILLED = `${ADDEPISODETVMOVIE}_${ActionType.Fulfilled}`;
const ADDEPISODETVMOVIE_REJECTED = `${ADDEPISODETVMOVIE}_${ActionType.Rejected}`;

const addTvMovieReducer = (state = initialState, action) => {
switch (action.type) {
    case ADDTVMOVIE_PENDING:
    case ADDEPISODETVMOVIE_PENDING:
    return {
        ...state,
        loading: true,
    };
    case ADDTVMOVIE_FULFILLED:
    case ADDEPISODETVMOVIE_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case ADDTVMOVIE_REJECTED:
    case ADDEPISODETVMOVIE_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default addTvMovieReducer;
