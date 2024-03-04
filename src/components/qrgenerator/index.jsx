import React, { useState } from "react";
import QRCode from "react-qr-code";

import "./style.css";

const Qr = () => {
  const [value, setValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerateQr = () => {
    setQrCode(value);
    setValue("");
  };

  return (
    <div>
      <h1>Qr Generator </h1>
      <div className="qr-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 10,
          }}
          className="input-qr"
        />
        <button
          disabled={value && value.trim() !== "" ? false : true}
          style={{ padding: 10, borderRadius: 10, width: 100 }}
          onClick={handleGenerateQr}
        >
          Generate
        </button>
        <QRCode value={qrCode} width={600} />
      </div>
    </div>
  );
};

export default Qr;
