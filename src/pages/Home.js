import CityCard from "../CityCard";
import cloudySkies from "../images/cloudy.svg";

const Home = ({ cities, cityData }) =>
  cities.map((city) => {
    if (!cityData) return null;
    const data = cityData[city];
    const isLoading = !data;
    return (
      !!data && (
        <div key={city}>
          {!!isLoading ? (
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

export default Home;
