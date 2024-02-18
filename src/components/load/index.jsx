import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import "./style.css";
import Singleitem from "./Singleitem";

const Load = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=40&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setDatas((prev) => [...prev, ...result.products]);
        console.log(result.products);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      alert("This must be trouble");
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    datas && datas.length >= 100
      ? setDisableButton(true)
      : setDisableButton(false);
  }, [datas]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="load-container">
      <div className="datas-container">
        {datas && datas.length
          ? datas.map((data, index) => {
              return <Singleitem key={index} {...data} />;
            })
          : null}
      </div>
      <button
        className="btn-load"
        onClick={handleClick}
        disabled={disableButton}
      >
        Load More !
      </button>
      {disableButton && <p>you have reached to 100 products</p>}
    </div>
  );
};

export default Load;
