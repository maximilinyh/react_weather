import {combineReducers} from "redux";
import cityReducer from "./cityReducer";
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
        fetchCity: cityReducer,
        searchCity: searchReducer
});