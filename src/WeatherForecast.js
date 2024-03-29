import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherTemperature(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Set loaded false
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  // Condition - If coordinates change

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <div
        className="row flex-nowrap mt-4"
        style={{ minWidth: "100%", overflow: "auto" }}
      >
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col text-center" key={index}>
                <WeatherForecastDay data={dailyForecast} unit={props.unit} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "770354d1fc8519196b600ff32242bc1d";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
