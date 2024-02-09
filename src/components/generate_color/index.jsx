import React, { useState } from "react";
import "./style.css";

const GenerateColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * hex.length);
      hexColor += hex[randomNumber];
    }
    hexColor = "#" + hexColor;
    setColor(hexColor);
  };

  const handleCreateRgbColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r},${g},${b})`;
    setColor(rgb);
  };

  return (
    <div
      className="generate-color"
      style={{ backgroundColor: color, width: "100%", height: "100dvh" }}
    >
      <div className="color-buttons">
        <button
          onClick={() => {
            setType("hex");
          }}
        >
          Create Hex Color
        </button>
        <button
          onClick={() => {
            setType("rgb");
          }}
        >
          Create Rgb Color
        </button>
        <button
          onClick={type === "hex" ? handleCreateHexColor : handleCreateRgbColor}
        >
          Generate Color
        </button>
      </div>

      <h1>{type === "hex" ? "Hex Color" : "Rgb Color"}</h1>
      <h2>{color}</h2>
    </div>
  );
};

export default GenerateColor;
