import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState("");

  const getItem = (id) => {
    const holdItem = data.find((x) => x.id === id);
    setSelected(holdItem === selected ? "" : holdItem);
  };

  return (
    <div className="acordion">
      <button className="btn">asdas</button>
      <section className="acordion-items">
        {data.map((item) => {
          return (
            <div className="acordion-item" onClick={() => getItem(item.id)}>
              <div key={item.id}> {item.question}</div>
              <span>+</span>
              {selected.id === item.id ? <p>{selected.answer}</p> : null}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Accordion;
