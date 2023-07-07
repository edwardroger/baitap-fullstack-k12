import React, {useState} from 'react'

const Input = ({setResult }) => {

    // const [result,setResult ] = useState(0);

    const [numberA, setNumberA] = useState();
    const [numberB, setNumberB] = useState();

    const hanldeOnChangeNumberA = (e) => {
        console.log(e.target.value)
        setNumberA(parseInt(e.target.value))
    }

    const hanldeOnChangeNumberB = (e) => {
        setNumberB(parseInt(e.target.value))
    }

    const cong = () => {
        setResult(numberA + numberB)
    }

    const tru = () => {
        setResult(numberA - numberB)
    }

    const nhan = () => {
        setResult(numberA * numberB)
    }

    const chia = () => {
        setResult(numberA / numberB)
    }
  return (
    <> 
        <input type="number" name='inputA'   onChange={e => hanldeOnChangeNumberA(e) } /> <br />
        <input type="number" name='inputB' onChange={e => hanldeOnChangeNumberB(e) } /> <br />
        <button onClick={cong}>+</button>
        {/* {result} */}
        <button onClick={tru}>-</button>
        
        <button onClick={nhan}>*</button>
        <button onClick={chia}>/</button>
    </>
  )
}

export default Input