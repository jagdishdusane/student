import React from "react";
import "./Title.css";
// import Card from "./Card";

const Title = () => {
  return (
    <div>
      <div className="student-item__description">
        <h2>STUDENT NAME</h2>
        <h2>MATHMATICS</h2>
        <h2>PHYSICS</h2>
        <h2>CHEMISTRY</h2>
        <div
          style={{ background: "#009688b3" }}
          className="student-item__price"
        >
          TOTAL
        </div>
      </div>
    </div>
  );
};

export default Title;
