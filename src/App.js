import axios from "axios";
import { useState, useEffect } from "react";

import Map from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v3/events"
      );

      setEventData(res.data.events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
