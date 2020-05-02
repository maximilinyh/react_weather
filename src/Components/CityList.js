import React  from "react";
import { connect} from 'react-redux';
import City from "./City";
import Loader from "./Loader";

const CityList = ({city, cityId, isLoad}) => {
    // localStorage.clear();
    const displayCity = city.map((item)=> {
        return <City
            key={item.id}
            city={item}
        />
    })

    return(
        <div className='weather-dashboard__cities'>{cityId === undefined?
            <b>По вашему запросу ничего не найдено</b>
            :
            isLoad?
                <Loader/>
            : displayCity}
        </div>
    )
}

function mapStateToProps (state) {
    return {
        isLoad: state.fetchCity.isLoad,
        city: state.fetchCity.city,
        error: state.fetchCity.error,
        cityId: state.searchCity.cityId
    }
}

export default connect(mapStateToProps, null) (CityList);