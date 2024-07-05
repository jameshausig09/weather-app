import CityCard from "../CityCard";
import cloudy from "../images/cloudy.svg";
import rainy from "../images/rainy.svg";

const Home = ({ cities, cityData }) =>
  cities.map((city) => {
    if (!cityData) return null;
    const data = cityData[city];
    const isLoading = !data;
    const weatherType = data?.weather[0].main === 'Rain' ? rainy : cloudy;
    // please extend this if you like with a switch statement (https://www.w3schools.com/js/js_switch.asp)
    return (
      !!data && (
        <div key={city}>
          {!!isLoading ? (
            <p>Loading...</p>
          ) : (
            <CityCard
              name={data.name}
              temp={data.main.temp}
              imageSrc={weatherType}
            />
          )}
        </div>
      )
    );
  });

export default Home;
