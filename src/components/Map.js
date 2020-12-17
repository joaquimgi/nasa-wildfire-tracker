import GoogleMapReact from "google-map-react";
import { useState } from "react";
import LocationInfoBox from "./LocationInfoBox";
import LocationMarker from "./LocationMarker";

const Map = ({ center, zoom, eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((event) => {
    if (
      (event.categories[0].id === "wildfires" ||
        event.categories[0].id === "severeStorms" ||
        event.categories[0].id === "seaLakeIce" ||
        event.categories[0].id === "volcanoes") &&
      event.geometry[0].coordinates[1] != null
    ) {
      return (
        <LocationMarker
          lat={event.geometry[event.geometry.length - 1].coordinates[1]}
          lng={event.geometry[event.geometry.length - 1].coordinates[0]}
          key={event.id}
          onClick={() =>
            setLocationInfo({
              id: event.id,
              title: event.title,
              description: event.description,
              type: event.categories[0].title,
            })
          }
          type={event.categories[0].id}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAPS_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
