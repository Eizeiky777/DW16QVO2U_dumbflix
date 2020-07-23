import { TV, TVDETAIL } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const TV_PENDING = `${TV}_${ActionType.Pending}`;
const TV_FULFILLED = `${TV}_${ActionType.Fulfilled}`;
const TV_REJECTED = `${TV}_${ActionType.Rejected}`;

const TVDETAIL_PENDING = `${TVDETAIL}_${ActionType.Pending}`;
const TVDETAIL_FULFILLED = `${TVDETAIL}_${ActionType.Fulfilled}`;
const TVDETAIL_REJECTED = `${TVDETAIL}_${ActionType.Rejected}`;

const filmReducer = (state = initialState, action) => {
switch (action.type) {
    case TV_PENDING:
    case TVDETAIL_PENDING:
    return {
        ...state,
        loading: true,
    };
    case TV_FULFILLED:
    case TVDETAIL_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case TV_REJECTED:
    case TVDETAIL_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default filmReducer;
