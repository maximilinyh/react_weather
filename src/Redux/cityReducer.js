import {START_FETCH_CITY, FETCH_CITY_SUCCESS, FETCH_CITY_FAIL} from "./types";

const initialState = {
    isLoad: false,
    city: [],
    error: null
}

const cityReducer = (state= initialState, action)=> {
    switch (action.type) {
        case START_FETCH_CITY:
            return {
                ...state,
                isLoad: true
            }
        case FETCH_CITY_SUCCESS:
            return {
                ...state,
                isLoad: false,
                city: [action.payload],
                error: null
            }
        case FETCH_CITY_FAIL:
            return {
                ...state,
                isLoad: false,
                error: action.payload.error
    }
        default:
            return state
    }
}

export default cityReducer;