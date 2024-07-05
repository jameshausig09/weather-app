import { useState } from "react";
import CityCard from "../CityCard";
import cloudySkies from "../images/cloudy.svg";
import "./Search.css";

const Search = ({ cities }) => {
  const [filteredCities, setFilteredCities] = useState(cities);
  const handleOnChange = (ev) => {
    let filtered = cities.filter((city) =>
      city.toLowerCase().includes(ev.target.value)
    );
    setFilteredCities(filtered);
  };
  const formattedCity = (cityHeadline) => cityHeadline.replace("+", " ");
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search.."
        onChange={(ev) => handleOnChange(ev)}
      ></input>
      {!filteredCities.length && <p>nothing found!</p>}
      {filteredCities.map((city) => (
        <CityCard name={formattedCity(city)} temp={0} imageSrc={cloudySkies} />
      ))}
    </div>
  );
};
export default Search;
