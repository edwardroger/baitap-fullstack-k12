import React, { useState } from 'react'; 

const Input = ()=>{
    const [inputA ,setA] = useState();
    const [inputB ,setB] = useState();
    const [result ,setResult] = useState();
    const handleOnchangA = (e) => {
        setA(parseInt(e.target.value));
    }
    const handleOnchangB = (e) => {
        setB(parseInt(e.target.value));
    }
    const handOnclickMinus = () => {
        setResult (inputA - inputB)
    }
    const handOnclickCore = () => {
        setResult (inputA * inputB)
    }
    const handOnclickDivision = () => {
        setResult (inputA / inputB)
    }
    const handOnclickPlus = () => {
        setResult (inputA + inputB)
    }
    return(
        <>
        <input type="number" name ="inputA" onChange={e=>handleOnchangA(e)}/> <br />
        <input type="number" name="inputB" id="" onChange={e=>handleOnchangB(e)}/> <br />
        <button onClick={ handOnclickPlus }>+</button>
        <button onClick={ handOnclickMinus }>-</button>
        <button onClick={ handOnclickCore }>x</button>
        <button onClick={ handOnclickDivision }>/</button>
        {result}

        </>
    )
} 

export default Input