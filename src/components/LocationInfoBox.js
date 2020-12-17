const LocationInfoBox = ({ info }) => {
  const getDefaultDescription = () => {
    switch (info.type) {
      case "Volcanoes":
        return "Related to both the physical effects of an eruption (rock, ash, lava) and the atmospheric (ash and gas plumes).";
      case "Wildfires":
        return "Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade.";
      case "Severe Storms":
        return "Related to the atmospheric aspect of storms (hurricanes, cyclones, tornadoes, etc.). Results of storms may be included under floods, landslides, etc.";
      case "Sea and Lake Ice":
        return "Related to all ice that resides on oceans and lakes, including sea and lake ice (permanent and seasonal) and icebergs.";
      default:
        return "";
    }
  };

  return (
    <div className="location-info">
      <h2>{info.type} Location Info</h2>
      <ul>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Description:{" "}
          <strong>
            {info.description != null
              ? info.description
              : getDefaultDescription()}
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
