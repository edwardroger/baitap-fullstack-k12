import React, {useState} from 'react'
import Input from './components/Day38/Input'
import Calculator from './components/Day38/Caculator';

const App = () => {
    const [result, setResult] = useState(0);

    const [calculatedResult, setCalculatedResult] = useState("");

    const handleCalculate = (result) => {
    setCalculatedResult(result);
  };
  return (
    <>
          <Input setResult={setResult} />
      <p>{result}</p>
      <Calculator onCalculate={handleCalculate} />
      {calculatedResult && <p>Kết quả: {calculatedResult}</p>}
    
    </>
    
  )
}

export default App