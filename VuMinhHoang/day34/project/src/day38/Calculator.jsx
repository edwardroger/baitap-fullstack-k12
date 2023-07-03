import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isOn, setIsOn] = useState(true);

  const handleInput = (value) => {
    if (isOn) {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleTogglePower = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    setInput('');
    setResult('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={input} disabled />
      <input type="text" value={result} disabled />
      <div>
        <button onClick={() => handleInput('1')} disabled={!isOn}>
          1
        </button>
        <button onClick={() => handleInput('2')} disabled={!isOn}>
          2
        </button>
        <button onClick={() => handleInput('3')} disabled={!isOn}>
          3
        </button>
        <button onClick={() => handleInput('4')} disabled={!isOn}>
          4
        </button>
        <button onClick={() => handleInput('5')} disabled={!isOn}>
          5
        </button>
        <button onClick={() => handleInput('6')} disabled={!isOn}>
          6
        </button>
        <button onClick={() => handleInput('7')} disabled={!isOn}>
          7
        </button>
        <button onClick={() => handleInput('8')} disabled={!isOn}>
          8
        </button>
        <button onClick={() => handleInput('9')} disabled={!isOn}>
          9
        </button>
        <button onClick={() => handleInput('0')} disabled={!isOn}>
          0
        </button>
      </div>
      <div>
        <button onClick={() => handleInput('+')} disabled={!isOn}>
          +
        </button>
        <button onClick={() => handleInput('-')} disabled={!isOn}>
          -
        </button>
        <button onClick={() => handleInput('*')} disabled={!isOn}>
          *
        </button>
        <button onClick={() => handleInput('/')} disabled={!isOn}>
          /
        </button>
      </div>
      <div>
        <button onClick={handleDelete} disabled={!isOn}>
          Delete
        </button>
        <button onClick={handleClear} disabled={!isOn}>
          Clear
        </button>
        <button onClick={handleCalculate} disabled={!isOn}>
          =
        </button>
      </div>
      <div>
        <button onClick={handleTogglePower}>
          {isOn ? 'Off' : 'On'}
        </button>
      </div>
    </div>
  );
};

export default Calculator;