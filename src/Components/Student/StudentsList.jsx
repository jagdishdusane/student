import React from "react";
import Card from "../common/Card";
import "./StudentsList.css";

const StudentsList = (props) => {
  const sum =
    Number(props.math) + Number(props.physics) + Number(props.chemistry);
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <h2>{props.math}</h2>
        <h2>{props.physics}</h2>
        <h2>{props.chemistry}</h2>
        <div className="expense-item__price">{sum}</div>
      </div>
    </Card>
  );
};

export default StudentsList;
