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
    <div className="calculator-container">
    <input type="text" value={result} disabled className="input-field" />
    <div className="button-grid">
      <div className="button-row">
        <button onClick={() => handleClick("1")} className="button">1</button>
        <button onClick={() => handleClick("2")} className="button">2</button>
        <button onClick={() => handleClick("3")} className="button">3</button>
        <button onClick={() => handleClick("+")} className="button">+</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick("4")} className="button">4</button>
        <button onClick={() => handleClick("5")} className="button">5</button>
        <button onClick={() => handleClick("6")} className="button">6</button>
        <button onClick={() => handleClick("-")} className="button">-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick("7")} className="button">7</button>
        <button onClick={() => handleClick("8")} className="button">8</button>
        <button onClick={() => handleClick("9")} className="button">9</button>
        <button onClick={() => handleClick("*")} className="button">*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick("0")} className="button">0</button>
        <button onClick={() => handleClick("/")} className="button">/</button>
        <button onClick={handleCalculate} className="button">=</button>
      </div>
    </div>
  </div>
  );
}

export default Calculator;