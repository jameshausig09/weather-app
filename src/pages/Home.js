import CityCard from "../CityCard";
import cloudy from "../images/cloudy.svg";
import rainy from "../images/rainy.svg";

const Home = ({ cities, cityData }) =>
  cities.map((city) => {
    if (!cityData) return null;
    const apiData = cityData[city.headline];
    const isLoading = !apiData;
    const weatherType = apiData?.weather[0].main === 'Rain' ? rainy : cloudy;
    // please extend this if you like with a switch statement (https://www.w3schools.com/js/js_switch.asp)
    return (
      !!apiData && (
        <div key={city.headline}>
          {!!isLoading ? (
            <p>Loading...</p>
          ) : (
            <CityCard
              name={apiData.name}
              temp={apiData.main.temp}
              imageSrc={weatherType}
            />
          )}
        </div>
      )
    );
  });

export default Home;
