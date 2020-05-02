import React  from "react";
import CityDropdown from "./CityDropdown";
import { connect, useDispatch } from 'react-redux';
import {changeSearchValue, fetchCitySuccess, addCityDropdown} from "../Redux/actions";
import city_list from '../CitiesIdData/city_list'


//handlerChangeValue fn
function handlerChangeValue(event, dispatch) {
    let targetValue = event.target.value;
    dispatch(changeSearchValue(targetValue))
}

//handler add filter city to dropdown list
function handlerAddCityDropdown(value, dispatch) {
    const result = city_list.filter((item) => {
        let searchQuery = value.toLowerCase();
        let searchValue = item.name.toLowerCase();
        return searchQuery.length > 2 ? searchValue.indexOf(searchQuery) !== -1 : null
    })
    dispatch(addCityDropdown(result))
}

//prevent default form submit
function handlerPreventSubmit(event) {
    event.preventDefault();
}
//find city handler
function handlerFindCity(value, dispatch) {
    const result = city_list.filter((item)=> {
        let searchValue = value.toLowerCase().trim();
        let searchQuery = item.name.toLowerCase();
        return searchValue === searchQuery
    })
    const id = result.map((item)=> {
        return item.id
    })
    dispatch(fetchCitySuccess(dispatch, id[0]))
    dispatch(changeSearchValue(''))
}

const CitySearch = ({searchValue, cityId})=> {
    const dispatch = useDispatch();
    return (
        <div className="weather-dashboard__search-group">
            <div className="weather-dashboard__search">
                <form onSubmit={(event)=> {
                    handlerPreventSubmit(event)
                }} className='d-flex mb-5'>
                    <input
                        onChange={(event)=>{
                            handlerChangeValue(event, dispatch)
                            handlerAddCityDropdown(searchValue, dispatch)
                        }}
                        value = {searchValue}
                        className='form-control mr-2'
                        type="text"
                        placeholder='Find city'
                    />
                    <button
                        onClick={()=>{
                            handlerFindCity(searchValue, dispatch)
                        }} className='btn btn-primary'
                        type='submit'
                        disabled={searchValue ===''? 'disabled': ''}>
                        Search
                    </button>
                </form>
            </div>
            {searchValue !=='' ? <CityDropdown/> : null}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        searchValue: state.searchCity.searchValue,
        cityId: state.searchCity.cityId,
    }
}

export default connect(mapStateToProps, null) (CitySearch);