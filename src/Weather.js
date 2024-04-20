import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);

    function handleResponse(response) {
      setWeatherData({
        ready: true,
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        time: "Wednesday 20:00",
        feelsLike: response.data.main.feels_like,
      });
    }

    function handleError(error) {
      console.error("Error fetching weather data:", error);
    }
  }, [props.defaultCity]);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a place..."
                className="form-control"
                autoFocus="on"
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
        <h1>{weatherData.city}</h1>
        <div className="weather-top-section">
          <ul className="weather-summary">
            <li>{weatherData.time}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="weather-temperature-info">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <ul className="weather-details">
            <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} m/s</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
