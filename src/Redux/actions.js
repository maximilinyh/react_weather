import {START_FETCH_CITY, FETCH_CITY_SUCCESS, FETCH_CITY_FAIL, SEARCH_CITY_VALUE, SET_CITY_ID, SHOW_CITY_DROPDOWN} from "./types";
import ky from 'ky';

const fetchCityStart = ()=> {
    return {
        type: START_FETCH_CITY
    }
}

const fetchCityFail = (error) => {
    return {
        type: FETCH_CITY_FAIL,
        payload: {error}
    }
}


const findCityId = (value)=> {
    return {
        type: SET_CITY_ID,
        payload: value
    }
}


export function fetchCitySuccess(dispatch, value) {
    return (dispatch)=> {
        const url = `http://api.openweathermap.org/data/2.5/weather?id=${value}&appid=71432ffb0dad25565531fd2251bdf599`;
        if (value !==undefined) {
            dispatch(findCityId(value))
            dispatch(fetchCityStart());
            setTimeout(()=> {
                (async () => {
                    try {
                        const parsed = await ky(url).json();
                        dispatch({type: FETCH_CITY_SUCCESS, payload: parsed})
                    } catch (error) {
                        dispatch(fetchCityFail(error.message))
                    }
                })();
            }, 500)

        }

        else {
            dispatch(findCityId(value))
        }

    }
}

export function changeSearchValue(value) {
    return {
        type: SEARCH_CITY_VALUE,
        payload: value
    }
}

export function addCityDropdown(value) {
    return {
        type: SHOW_CITY_DROPDOWN,
        payload: value
    }
}
