import loader from "../loader.gif";
import nasa from "./../assets/img/NASA.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Loader" />
      <h1>Fetching NASA EONET Data</h1>
      <img src={nasa} alt="NASA" />
    </div>
  );
};

export default Loader;
