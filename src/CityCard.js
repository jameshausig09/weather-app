import "./CityCard.css";

function CityCard({ name, temp, imageSrc }) {
  return (
    <div
      className="CityCard"
      style={{
        backgroundColor:
          temp >= 30 ? "#ffaa48" : temp >= 15 ? "#87cefa" : "#d3d3d3",
      }}
    >
      <div className="CityCard-content">
        {!!name && <p className="CityCard-name">{name}</p>}
        {!!temp && <p className="CityCard-temp">{temp} °</p>}
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