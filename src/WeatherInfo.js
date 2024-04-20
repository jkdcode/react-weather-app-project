import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <div className="weather-top-section">
        <ul className="weather-summary">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="weather-temperature-info">
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <ul className="weather-details">
          <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} m/s</li>
        </ul>
      </div>
    </div>
  );
}
