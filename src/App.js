import { useEffect, useState } from "react";
import "./App.css";
import CityCard from "./CityCard";
import cloudySkies from "./images/cloudy.svg";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({});
  async function fetchData(city) {
    let url = `
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=TKSNR9R5STMBCQ8HM2Z9GPZPB&contentType=json`;
    const RESPONSE = await axios.get(url);
    setWeatherData(RESPONSE.data);
  }
  const cities = ["hamburg"];

  function renderCityCard() {
    return cities.map(async (city) => {
      const DATA = await fetchData(city);
      console.log(DATA);
      return (
        <CityCard
          name={DATA.resolvedAddress}
          temp={DATA.currentConditions.temp}
          imageSrc={cloudySkies}
        />
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* citycard */}
        {renderCityCard()}
      </header>
      <nav className="Navigation">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Calendar</li>
          <li>Custom</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
