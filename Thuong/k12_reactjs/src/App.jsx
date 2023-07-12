import InputNumber from './components/InputNumber';
import Button from './components/Button';
import { useState } from 'react';
import Result from './components/Result';
import Calculator from './components/Calculator';
import Input from './components/Input';

const App = () => {
  const [number , setNumber] = useState();
  const [sum , setSum]  = useState();
  const handleSetnumber = (value) => {
    setNumber(value);
  }
  const handleMathSum = (sumValue) => {
    setSum(sumValue);
  }

  return (
    <>
      <h3>Day 39</h3>
      <InputNumber handleSetnumber = {handleSetnumber} />
      <Button Datanumber = { number } handleMathSum = { handleMathSum}/>
      {/* {sum} */}
      <Result DataResult = {sum} />
      <h3>Day 38
        
      </h3>
      <Calculator/>
      <Input/>
    </>
  )
}

export default App;
