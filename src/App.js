import React from 'react';
import {Container} from "react-bootstrap";
import CitySearch from "./Components/CitySearch";
import CityList from "./Components/CityList";
import CityGeo from "./Components/CityGeo";
import './App.scss';

const App = ()=> {
    return (
        <Container className='mt-5'>
            <div className="weather-dashboard">
                <CityGeo/>
                <CitySearch/>
                <CityList/>
            </div>
        </Container>
    )
}
export default App;
