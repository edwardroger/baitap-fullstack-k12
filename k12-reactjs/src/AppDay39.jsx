import React, { useState } from 'react'
import InputNumber from './components/Day39/InputNumber'
import Button from './components/Day39/Button';
import Result from './components/Day39/Result';

const App = () => {
    const [number, setNumber] = useState();
    const [sum, setSum] = useState();

    const handleSetNumber = (value) => {
        setNumber(value)
    }

    const handleSetSum = (sumValue) => {
        setSum(sumValue)
    }
    return (
    <>
        <InputNumber handleSetNumber={ handleSetNumber }/>
        <Button number={ number }
            handleSetSum={ handleSetSum } />
        <Result resultSum={ sum } />
    </>
  )
}

export default App