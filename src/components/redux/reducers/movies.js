import { MOVIES } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const MOVIES_PENDING = `${MOVIES}_${ActionType.Pending}`;
const MOVIES_FULFILLED = `${MOVIES}_${ActionType.Fulfilled}`;
const MOVIES_REJECTED = `${MOVIES}_${ActionType.Rejected}`;

const moviesReducer = (state = initialState, action) => {
switch (action.type) {
    case MOVIES_PENDING:
    return {
        ...state,
        loading: true,
    };
    case MOVIES_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case MOVIES_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default moviesReducer;
