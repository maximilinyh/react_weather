import React from "react";
import city_list from '../CitiesIdData/city_list'
import {fetchCitySuccess} from "../Redux/actions";
import {useDispatch} from "react-redux";

function handlerGetLocation(dispatch) {
        navigator.geolocation.getCurrentPosition(
        function(position) {

            //current coords
            let latValue = position.coords.latitude,
                longValue = position.coords.longitude

            //get data cities coords
            const citiesCoords = [...city_list].map((city)=> {
                return {
                    id: city.id,
                    lat: city.coord.lat,
                    lon: city.coord.lon,
                }
            })

            //filter coords
            let result = latValue < 0
                ?
                citiesCoords.filter(cur => cur.lat < latValue && cur.lon < longValue).sort((a, b) => {
                    return a.lat > b.lat && a.lon > b.lon? 1 : -1
                })[0]
                :
                citiesCoords
                    .filter(cur => cur.lat > latValue && cur.lon > longValue)
                    .sort((a, b) => {
                        return a.lat > b.lat && a.lon > b.lon? 1 : -1
                })[0];

            //dispatch action
            dispatch(fetchCitySuccess(dispatch, result.id))

        },

        function(error){
            console.log(error.code)
        }
    );


}

const CityGeo = () => {
    const dispatch = useDispatch();
    return(
        <button
            className='btn btn-link'
            onClick={()=> {
                handlerGetLocation(dispatch);
            }}
        >
            Weather in your location
        </button>
    )
}

export default CityGeo;