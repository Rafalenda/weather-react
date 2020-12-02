import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setcity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setweather] = useState("");

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setweather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `a2756a3fff03123af0c481e8c916b319`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setcity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        autoFocus={true}
        onChange={updateCity}
      />
      
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <ul>
          <li>
            The temperature in {city} is {Math.round(weather.temperature)}°C
          </li>
          <li>Humidity: {weather.humidity}</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
