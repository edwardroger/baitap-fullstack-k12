import './App.css';
import React, { useState, Key, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0)

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  const handleIncrease = (number) => {
    setNumber(number + 1)
  }
  const handleDecrease = (number) => {
    setNumber(number - 1)
  }
  return (<div>
    <input type="text" name="email" value={number} onChange={(e) => handleChange(e)}></input>
    <button onClick={() => handleIncrease(number)}>Increase</button>
    <button onClick={() => handleDecrease(number)}>Decrease</button>
    <h1>{number}</h1>
  </div>)
}

export default App;
