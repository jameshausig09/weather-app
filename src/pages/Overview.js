import "./Overview.css";

const Overview = ({ cities, cityData }) => (
  <div className="overview">
    <h1 className="overview-item">Overview</h1>
    {cities.map((city) => {
      // for each city we want to do something with it
      const apiData = cityData[city.headline];
      if (!apiData) return null;

      const sunrise = new Date(apiData.sys.sunrise * 1000).toUTCString();
      const sunset = new Date(apiData.sys.sunset * 1000).toUTCString();
      const sunriseTime = sunrise.slice(17, -7);
      const sunsetTime = sunset.slice(17, -7);
      return (
        <div className="overview-box-item">
          {city.headline && (
            <h2 className="overview-box-text overview-box-text-first-child">
              {city.headline}
            </h2>
          )}
          <p className="overview-box-text">Sunrise: {sunriseTime}</p>
          <p className="overview-box-text">Sunset: {sunsetTime}</p>
          {city.description && (
            <p className="overview-box-text">Description: {city.description}</p>
          )}
        </div>
      );
    })}
  </div>
);

export default Overview;
