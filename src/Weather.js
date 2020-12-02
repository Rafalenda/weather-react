import React from "react";
import axios from "axios"; 
import Loader from "react-loader-spinner";
import Search from "./Search";

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }

    let apiKey = "a2756a3fff03123af0c481e8c916b319";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return ( 
    <div>
        <Search />
      </div>
    );
}