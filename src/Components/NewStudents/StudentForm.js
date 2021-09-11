import React, { useState } from "react";
import "./StudentForm.css";

const StudentForm = (props) => {
  const [name, setName] = useState();
  const [math, setMath] = useState();
  const [physics, setPhysics] = useState();
  const [chemistry, setChemistry] = useState();
  const [total, setTotal] = useState();

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const mathHandler = (event) => {
    setMath(event.target.value);
  };
  const physicsHandler = (event) => {
    setPhysics(event.target.value);
  };
  const chemistryHandler = (event) => {
    setChemistry(event.target.value);
  };

  const totalHandler = () => {
    const sum = Number(math) + Number(physics) + Number(chemistry);
    setTotal(sum);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      name: name,
      math: math,
      physics: physics,
      chemistry: chemistry,
      total: total,
    };
    props.NewFormData(inputData);
    setName("");
    setMath("");
    setPhysics("");
    setChemistry("");
    setTotal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Student Name</label>
          <input type="text" onChange={nameHandler} value={name} required />
        </div>
        <div className="new-expense__control">
          <label>Math</label>
          <input
            required
            type="number"
            min="0"
            max="100"
            onChange={mathHandler}
            value={math}
          />
        </div>
        <div className="new-expense__control">
          <label>Physics</label>
          <input
            required
            type="number"
            min="0"
            max="100"
            onChange={physicsHandler}
            value={physics}
          />
        </div>
        <div className="new-expense__control">
          <label>Chemistry</label>
          <input
            required
            type="number"
            min="0"
            max="100"
            onChange={chemistryHandler}
            value={chemistry}
          />
        </div>
        <div className="new-expense__control">
          <label>Total</label>
          <input onFocus={totalHandler} value={total} type="number" required />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Data</button>
      </div>
    </form>
  );
};

export default StudentForm;
