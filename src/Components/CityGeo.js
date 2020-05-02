import React from "react";
import city_list from '../CitiesIdData/city_list'
import {fetchCitySuccess} from "../Redux/actions";
import {useDispatch} from "react-redux";

function handlerGetLocation(dispatch) {
        navigator.geolocation.getCurrentPosition(
        function(position) {
            let latValue = position.coords.latitude.toFixed(),
                longValue = position.coords.longitude.toFixed()
            const result = city_list.filter((item)=> {
                let latQuery = item.coord.lat.toFixed(),
                    longQuery = item.coord.lon.toFixed()

                return latValue === latQuery && longValue === longQuery
            })

            const id = result.map((item)=> {
                return item.id
            })

            dispatch(fetchCitySuccess(dispatch, id[0]))

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