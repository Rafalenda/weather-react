import React from "react";
import axios from "axios"; 
import Loader from "react-loader-spinner";

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }

    let apiKey = "a2756a3fff03123af0c481e8c916b319";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return ( <div>
        <h2>Here it is the Weather Component</h2>
        <Loader
         type="Puff"
         color="#00BFaF"
         height={200}
         width={200}
         timeout={10000} //3 secs
 
        />
      </div>
    );
}