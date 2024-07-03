import { useState } from "react";
import CityCard from "../CityCard";
import cloudySkies from "../images/cloudy.svg";
import "./Search.css";

const Search = () => {
  const cities = ["Hamburg", "New+York", "Paris"];
  const [filteredCities, setFilteredCities] = useState(cities);
  const handleOnChange = (ev) => {
    let filtered = cities.map((city) =>
      city.toLowerCase().includes(ev)
    );
    setFilteredCities(cities);
  };
  const formattedCity = (cityStr) => {
    return cityStr.replace("+", " ");
  };
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search.."
        onChange={(ev) => handleOnChange(ev)}
      ></input>
      {filteredCities.map((city) => {
        const formattedCityStr = formattedCity(city);
        return (
          <CityCard name={formattedCityStr} temp={0} imageSrc={cloudySkies} />
        );
      })}
    </div>
  );
};
export default Search;
