import CityCard from "../CityCard";
import cloudySkies from "../images/cloudy.svg";
import "./Search.css";

const Search = () => {
  const cities = ["Hamburg", "New+York", "Paris"];
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search.."
        onChange={(ev) => {
          const filteredCities = cities.filter((city) =>
            city.toLowerCase().includes(ev.target.value)
          );
          console.log("filteredCities", filteredCities);
          // this is almost there! How about you move this logic up to a function above the return line, and then use the new array in line 20 instead of "cities"?
        }}
      ></input>
      {cities.map((city) => (
        <CityCard name={city} temp={0} imageSrc={cloudySkies} />
      ))}
    </div>
  );
};
export default Search;
