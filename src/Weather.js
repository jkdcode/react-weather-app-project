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
      <h1>Cayman Islands</h1>
      <ul>
        <li>Friday 20:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row weather-details">
        <div className="col-6">
          <div className="weather-temperature-info">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly cloudy"
            />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 2 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
