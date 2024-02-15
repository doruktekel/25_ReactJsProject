import React, { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Imageslider = ({ url, limit = 5, page = 1 }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await resp.json();
      setImages(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log("Error", Error);
      setError(error);
      setLoading(false);
    }
  };
  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages();
    }
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircle className="arrow arrow-left" onClick={handlePrev} />
      {images && images.length
        ? images.map((image, index) => {
            return (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image current-image-hidden"
                }
              />
            );
          })
        : error}
      <BsArrowRightCircle className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  id="index"
                  className={
                    index === currentSlide
                      ? "current-indicator"
                      : "current-indicator current-indicator-hidden"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default Imageslider;
