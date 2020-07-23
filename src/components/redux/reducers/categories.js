import { CATEGORIES } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const CATEGORIES_PENDING = `${CATEGORIES}_${ActionType.Pending}`;
const CATEGORIES_FULFILLED = `${CATEGORIES}_${ActionType.Fulfilled}`;
const CATEGORIES_REJECTED = `${CATEGORIES}_${ActionType.Rejected}`;


const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
            case CATEGORIES_PENDING:
            return {
                ...state,
                loading: true,
            };
            case CATEGORIES_FULFILLED:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
            case CATEGORIES_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            default:
            return state;
        }
};

export default categoriesReducer;
