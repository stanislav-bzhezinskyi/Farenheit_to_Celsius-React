import "./App.css";
// import uuid from 'react-uuid';
import React, { useState } from "react";

function App() {
  const [yearOld, setyearOld] = useState("");
  const [num, setNum] = useState(0);
  const [farenheit, setFarenheit] = useState(32);
  const [reverseBtn, setReverseBtn] = useState(true);
  const [degreeName, setDegreeName] = useState("Farenheit");
  const [degreeName2, setDegreeName2] = useState("Celsius");

  const inputHandler = (event) => {
    setyearOld(event.target.value);
  };

  const degreeseHandler = (event) => {
		if(reverseBtn) {
			const solution = ((event.target.value - 32) * 5) / 9;
			setFarenheit(event.target.value);
			setNum(solution.toFixed(1));
		} else {
			const solution = ((event.target.value * 9 / 5) + 32) ;
			setFarenheit(event.target.value);
			setNum(solution.toFixed(1));
		}
  };

  const reverseHandler = () => {
    setReverseBtn(!reverseBtn);
    if (!reverseBtn) {
			setDegreeName("Farenheit");
      setDegreeName2("Celsius");
			setFarenheit(32);
			setNum(0)
    } else {
			setDegreeName("Celsius");
      setDegreeName2("Farenheit");
			setFarenheit(0);
			setNum(32)
    }
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <input onChange={inputHandler} value={yearOld} /> <span>y.o.</span>
      <p>user are from {year - yearOld}</p>
      <p>
        <input type="number" onChange={degreeseHandler} value={farenheit} />{" "}
        {degreeName} is {num} {degreeName2}
      </p>
      <button onClick={reverseHandler}>reverse</button>
    </div>
  );
}

export default App;
