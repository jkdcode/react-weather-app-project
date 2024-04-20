import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Longyearbyen</h1>
      <div className="weather-top-section">
        <ul className="weather-summary">
          <li>Friday 20:00</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="weather-temperature-info">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
          />
          <span className="temperature">-30</span>
          <span className="unit">°C</span>
        </div>
        <ul className="weather-details">
          <li>Precipitation: 1%</li>
          <li>Humidity: 58%</li>
          <li>Wind: 2 m/s</li>
        </ul>
      </div>
    </div>
  );
}
