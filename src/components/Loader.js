import loader from "../loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Loader" />
      <h1>Fetching NASA Data</h1>
    </div>
  );
};

export default Loader;
