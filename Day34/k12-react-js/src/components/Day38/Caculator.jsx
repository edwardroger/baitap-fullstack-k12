import React, { useState } from "react";
import './Caculator.css';

function Calculator(props) {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result);
      props.onCalculate(calculatedResult);
    } catch (error) {
      console.error("Invalid calculation");
    }
  };

  return (
    <div>
      <input type="text" value={result} disabled />
      <br />
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("+")}>+</button>
      <br />
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("-")}>-</button>
      <br />
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("*")}>*</button>
      <br />
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={() => handleClick("/")}>/</button>
      <button onClick={handleCalculate}>=</button>
    </div>
  );
}

export default Calculator;