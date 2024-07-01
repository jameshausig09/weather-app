import { useEffect, useState } from "react";
import "./App.css";
import CityCard from "./CityCard";
import cloudySkies from "./images/cloudy.svg";

function App() {
  const [cityData, setCityData] = useState({});
  const cities = ["Hamburg", "New+York", "Paris"];

  const fetchData = async (city) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c6f9c5276d42f0a32ce26ae3d1334051&units=metric`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchDataForAllCities = async () => {
      const responses = await Promise.all(
        cities.map((city) => fetchData(city))
      );
      const data = cities.reduce((acc, city, index) => {
        acc[city] = responses[index];
        return acc;
      }, {});
      setCityData(data);
    };
    fetchDataForAllCities();
  }, []);

  return cities.map((city) => {
    if (!cityData) return null;
    const data = cityData[city];
    const isLoading = !data;
    return (
      !!data && (
        <div key={city}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CityCard
              name={data.name}
              temp={data.main.temp}
              imageSrc={cloudySkies}
            />
          )}
        </div>
      )
    );
  });
}

export default App;
