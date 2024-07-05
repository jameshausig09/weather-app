import "./Overview.css";

const Overview = ({ cities, cityData }) => (
  <div className="overview">
    <h1 className="overview-item">Overview</h1>
    {cities.map((city) => {
      const data = cityData[city];
      if (!data) return null;

      const sunrise = new Date(data.sys.sunrise * 1000).toUTCString();
      const sunset = new Date(data.sys.sunset * 1000).toUTCString();
      const sunriseTime = sunrise.slice(17, -7);
      const sunsetTime = sunset.slice(17, -7);
      console.log(data);
      return (
        <div className="overview-box-item">
          <h2 className="overview-box-text overview-box-text-first-child">
            {data.name}
          </h2>
          <p className="overview-box-text">Sunrise: {sunriseTime}</p>
          <p className="overview-box-text">Sunset: {sunsetTime}</p>
          <p className="overview-box-text">{data.description}</p>
        </div>
      );
    })}
  </div>
);

export default Overview;
