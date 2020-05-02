import React from "react";
import {Table} from "react-bootstrap";
import kelvinToCelsius from 'kelvin-to-celsius';


function timeConverter(UNIX_timestamp){
    let date = new Date((UNIX_timestamp)*1000).toLocaleTimeString('en-US', { timeZone: 'America/Creston' });
    let timezone = new Date(2500).toLocaleTimeString().charAt(0)

    console.log(timezone)
    return date;
}

const City = ({city}) => {
    return(
        <div className='city'>
            <div className="city__main mb-5">
                <h3 className="city__name">
                    {`Weather in ${city.name} (${city.sys.country})`}
                </h3>
                <h2 className="city__temperature d-block">
                    {kelvinToCelsius(city.main.temp).toFixed()} °C
                </h2>
                <small className='city__feels'>
                    {`Feels like ${kelvinToCelsius(city.main.feels_like).toFixed()} °C`}
                </small>
                <small className='city__description d-block'>
                    <span> {`${city.weather[0].description}`.charAt(0).toUpperCase() + `${city.weather[0].description}`.substr(1) }</span>
                    <img
                        className='city__icon'
                        src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                        alt="icon"/>
                </small>
                <div className="city__date mt-2">
                    <b>{`${new Date().toDateString()}`}</b>
                </div>
            </div>
            <Table striped bordered size='md' className='mt-2'>
                <tbody>
                <tr>
                    <td>Wind</td>
                    <td>{`${city.wind.speed} m/s`}</td>
                </tr>
                <tr>
                    <td>Cloudiness</td>
                    <td>{`${city.weather[0].description}`.charAt(0).toUpperCase() + `${city.weather[0].description}`.substr(1) }</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{`${city.main.pressure} hpa`}</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{`${city.main.humidity} %`}</td>
                </tr>

                <tr>
                    <td>Sunrise</td>
                    <td>{timeConverter(city.sys.sunrise)}</td>
                </tr>

                <tr>
                    <td>Sunset</td>
                    <td>{timeConverter(city.sys.sunset)}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default City;