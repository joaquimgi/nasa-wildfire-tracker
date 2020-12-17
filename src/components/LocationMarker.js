import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/pine-tree-fire";
import StormIcon from "./../assets/img/2675959.svg";
import VolcanoIcon from "./../assets/img/2712018.png";
import IcebergIcon from "./../assets/img/iceberg.png";

const LocationMarker = ({ lat, lng, onClick, type }) => {
  const getIcon = () => {
    if (type === "wildfires")
      return <Icon icon={fireIcon} className="fire-icon" />;
    else if (type === "severeStorms")
      return <img src={StormIcon} alt="Severe Storm" className="storm-icon" />;
    else if (type === "volcanoes")
      return (
        <img src={VolcanoIcon} alt="Active Volcano" className="volcano-icon" />
      );
    else if (type === "seaLakeIce")
      return <img src={IcebergIcon} alt="Iceberg" className="iceberg-icon" />;
  };

  return (
    <div className="location-marker" onClick={onClick}>
      {getIcon()}
    </div>
  );
};

export default LocationMarker;
