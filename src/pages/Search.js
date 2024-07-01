import CityCard from "../CityCard";
import cloudySkies from "../images/cloudy.svg";
import "./Search.css";

const Search = () => {
  const cities = ["Hamburg", "New+York", "Paris"];
  return (
    <div className="Search">
      <input type="text" placeholder="Search.."></input>
      {/* // ok this is great, now imagine that when you type in the search, you want the array to show the cities that match the search as you type them, 
      // so if you type "H" you should see "Hamburg" and if you type "Ha" you should see "Hamburg" and so on,
      // how would you do that?

      // I would use the filter method to filter the cities array based on the input value. 
// Have a look at how to use a filter function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */}
      {cities.map((city) => (
        <CityCard name={city} temp={0} imageSrc={cloudySkies} />
      ))}
    </div>
  );
};
export default Search;
