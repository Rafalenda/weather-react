import React from "react"
import axios from 'axios';

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }
    let apiKey = "a2756a3fff03123af0c481e8c916b319";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);

    return <h2>Hello from Weather component</h2>;
}