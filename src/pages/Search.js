import CityCard from "../CityCard";
import cloudySkies from "../images/cloudy.svg";
import "./Search.css";

const Search = () => {
  // hey James! So have a look at your wireframe in Excalidraw, and start to make the hardcoded layout of your search
  // page, and then we can start to make it dynamic by adding the search functionality.
  const cities = ["Hamburg", "New+York", "Paris"];
  return (
    <div className="Search">
      <input type="text" placeholder="Search.."></input>
      {cities.map((city) => (
        <CityCard name={city} temp={0} imageSrc={cloudySkies} />
      ))}
    </div>
  );
};
export default Search;
