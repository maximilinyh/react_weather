import React from "react";
import { connect, useDispatch } from 'react-redux';
import {changeSearchValue, fetchCitySuccess} from "../Redux/actions";


function handlerShowWeatherCity(dispatch, dropDown, id) {
    const cityId = dropDown.filter((city)=> {
        return city.id === id;
    }).map((city)=> {
        return city.id
    })

    dispatch(fetchCitySuccess(dispatch, cityId[0]))
    dispatch(changeSearchValue(''))
}

const CityDropdown = ({dropDown}) => {
    const dispatch = useDispatch();
    return(
        <div className="weather-dashboard__dropdown">
            {dropDown.length
                ?
                <ul>
                    {
                        dropDown.map((city)=> {
                            return <li
                                onClick={()=> {
                                    handlerShowWeatherCity(dispatch, dropDown, city.id);
                                }}
                                key={city.id}>
                                {`${city.name} (${city.country})`}
                            </li>
                        })
                    }
                </ul>
                :
                <span>No result</span>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        dropDown: state.searchCity.dropDown
    }
}

export default connect(mapStateToProps) (CityDropdown);