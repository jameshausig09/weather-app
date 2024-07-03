import "./CityCard.css";

function CityCard({ name, temp }) {
  return (
    <div
      className="CityCard"
      style={{
        backgroundColor:
          temp >= 30 ? "#ffaa48" : name >= 16 ? "#87cefa" : "#d3d3d3",
      }}
    >
      <div className="CityCard-content">
        {!!name && <p className="CityCard-name">{temp}</p>}
        {!!temp && <p className="CityCard-temp">{Math.round(temp)} °</p>}
      </div>
      {!!imageSrc && (
        <div className="CityCard-image">
          <img src={imageSrc} alt="weather condition" />
        </div>
      )}
    </div>
  );
}

export default CityCard;
