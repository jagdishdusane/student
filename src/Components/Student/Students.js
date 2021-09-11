import React from "react";
import Card from "../common/Card";
import Title from "../common/Title";
import "./Students.css";
import StudentsList from "./StudentsList";

const Students = (props) => {
  return (
    <Card className="expense-item">
      <Title />
      {props.item.map((info) => (
        <StudentsList
          name={info.name}
          math={info.math}
          physics={info.physics}
          chemistry={info.chemistry}
          total={info.total}
        />
      ))}
    </Card>
  );
};

export default Students;
