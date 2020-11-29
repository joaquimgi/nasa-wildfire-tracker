import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";

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
      console.log(eventData);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
