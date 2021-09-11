import React from "react";
import StudentForm from "./StudentForm";
import "./NewStudents.css";

const NewStudents = (props) => {
  const formData = (formInfo) => {
    const info = {
      ...formInfo,
      id: Math.random().toString(),
    };
    props.newData(info);
  };

  return (
    <div className="new-expense">
      <StudentForm NewFormData={formData} />
    </div>
  );
};

export default NewStudents;
