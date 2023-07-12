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
        <button style={{width : "50px" , height :"30px"}} onClick={ handOnclickPlus }>+</button>
        <button style={{width : "50px" , height :"30px"}} onClick={ handOnclickMinus }>-</button>
        <button style={{width : "50px" , height :"30px"}} onClick={ handOnclickCore }>x</button>
        <button style={{width : "50px" , height :"30px"}} onClick={ handOnclickDivision }>/</button>
       <br />
        Kết quả :  {result}
        </>
    )
} 
export default Input