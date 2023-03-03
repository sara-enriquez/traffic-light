import React, { useState, useEffect } from "react";

const Home = () => {
  const [glow, setGlow] = useState({
    red: "",
    yellow: "",
    green: "",
  });

  useEffect(() => {
    let glowing = Math.floor(Math.random() * 3);
    if (glowing == 0) {
      setGlow({ red: "glow" });
    } else if (glowing == 1) {
      setGlow({ yellow: "glow" });
    } else {
      setGlow({ green: "glow" });
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="stick"></div>
      <div className="traffic-light">
        <div
          className={"red " + glow.red}
          onClick={() => {
            setGlow({ red: "glow" });
          }}
        ></div>
        <div
          className={"yellow " + glow.yellow}
          onClick={() => {
            setGlow({ yellow: "glow" });
          }}
        ></div>
        <div
          className={"green " + glow.green}
          onClick={() => {
            setGlow({ green: "glow" });
          }}
        ></div>
      </div>
      <button id="purple" className="btn">
        Change color
      </button>
      <button className="btn">Add color</button>
    </div>
  );
};

export default Home;
