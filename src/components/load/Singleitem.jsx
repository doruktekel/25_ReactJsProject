import React from "react";

const Singleitem = (data) => {
  return (
    <div className="data-container">
      <img src={data.thumbnail} alt="thumbnail" className="image" />
      <h3>{data.brand}</h3>
      <p>{data.description}</p>
      <h2>{data.price} $</h2>
    </div>
  );
};

export default Singleitem;
