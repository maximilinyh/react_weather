import {SEARCH_CITY_VALUE,SET_CITY_ID, SHOW_CITY_DROPDOWN} from "./types";

const initialState = {
    searchValue: '',
    cityId: '',
    dropDown: [],
}

const searchReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SEARCH_CITY_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        case SET_CITY_ID:
            return  {
                ...state,
                cityId: action.payload
            }

        case SHOW_CITY_DROPDOWN:
            return {
                ...state,
                dropDown: action.payload
            }
        default:
            return state
    }
}

export default searchReducer;