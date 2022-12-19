import "./PreLoader.css";

export const Spiner = () => {
  return (
    <div className="spinner">
      <div className="spinner-circle spinner-circle-outer"></div>
      <div className="spinner-circle-off spinner-circle-inner"></div>
      <div className="spinner-circle spinner-circle-single-1"></div>
      <div className="spinner-circle spinner-circle-single-2"></div>
      <div className="text">Loading...</div>
    </div>
  );
};
