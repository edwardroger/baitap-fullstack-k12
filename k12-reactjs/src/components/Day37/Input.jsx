import React, { useState } from 'react'

const Input = () => {
    const [numberA, setNumberA] = useState();
    const [numberB, setNumberB] = useState();
    const [result, setResult] = useState(0);

    const handleOnChangeNumberA = (e) => {
        console.log(e.target.value);
        setNumberA(parseInt(e.target.value))
    }

    const handleOnChangeNumberB = (e) => {
        setNumberB(parseInt(e.target.value))
    }

    const handleOnClick = () => {
        setResult(numberA + numberB);
    }

    return (
    <>
        <div className="form">
            <input
                type="text"
                name='numberA'
                placeholder='Nhập vào số a'
                onChange={ e => handleOnChangeNumberA(e) }
            />
            <br />
            <input 
                type="text"
                name="numberB"
                placeholder="Nhập vào số b"
                onChange={ e => handleOnChangeNumberB(e) }
            />
            <br />
            <button onClick={ handleOnClick }>+</button>
            <spap>= {result}</spap>
        </div>
    </>
  )
}

export default Input