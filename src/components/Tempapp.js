import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
 
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bd81f103976c68cf8b8063fca88fb41e`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        
        fetchApi();
    }, [search])

    return(
        <>
        <div className="box">
            <div className="inputData">
            <input
            type="search"
            className="inputFeild"
            onChange={ (event) => { setSearch(event.target.value)} } />
            </div>

    {!city ? (
        <p> No Data Found </p>
    ) : (
        <div>
        <div className="info">
            <h2 className="location">
             <i className="fas fa-street-view"></i> {search}  
            </h2>
            <h1 className="temp">
             {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max"> Min : 5.25°Cel | Max : 5.25°Cel </h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    )}

        </div>
        </>
    )
}

export default Tempapp;