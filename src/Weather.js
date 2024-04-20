import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [input, setInput] = useState(props.defaultCity);

  useEffect(() => {
    if (!city) return;

    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);

    function handleResponse(response) {
      setWeatherData({
        ready: true,
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon,
        date: new Date(response.data.dt * 1000),
        feelsLike: response.data.main.feels_like,
      });
    }

    function handleError(error) {
      console.error("Error fetching weather data:", error);
    }
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault();
    setCity(input);
  }

  function handleCityChange(event) {
    setInput(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a place..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
