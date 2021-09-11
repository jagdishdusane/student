import React, { useState } from "react";
import Students from "./Components/Student/Students";
import NewStudents from "./Components/NewStudents/NewStudents";

const stdData = [
  {
    id: 1,
    name: "Ganesh Joshi",
    math: 100,
    physics: 100,
    chemistry: 100,
  },
  {
    id: 2,
    name: "Ankit Pande",
    math: 50,
    physics: 60,
    chemistry: 50,
  },
  {
    id: 3,
    name: "sujit gard",
    math: 70,
    physics: 60,
    chemistry: 70,
  },
];

const App = () => {
  const [addStud, setStud] = useState(stdData);
  const dataHandler = (sInfo) => {
    setStud((prevData) => {
      return [sInfo, ...prevData];
    });
  };

  return (
    <div>
      <NewStudents newData={dataHandler} />
      <Students item={addStud} />
    </div>
  );
};

export default App;
