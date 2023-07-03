import React, { useState } from "react";


const Input = () => {
    const [numberA, setNumberA] = useState();
    const [numberB, setNumberB] = useState();
    const [result, setResult] = useState(0);

    const handleChangeNumberA = (e) => {
        setNumberA(parseInt(e.target.value))
    }

    const handleChangeNumberB = (e) => {
        setNumberB(parseInt(e.target.value))
    }

    const handleClick = () => {
        setResult(numberA + numberB)
    }

    return (<div>
        <div className="form">
            <input type="text" onChange={handleChangeNumberA} name="numberA" placeholder="Nhập vào số a"></input>
        </div>
        <br />
        <input type="text" onChange={handleChangeNumberB} name="numberB" placeholder="Nhập vào số b"></input>
        <br />
        <button onClick={handleClick}>+</button>
        <span>{result}</span>
    </div>)
}

export default Input