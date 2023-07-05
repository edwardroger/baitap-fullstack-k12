import React, { useState, useCallback } from 'react'

const Input = (props) => {
    const [number, setNumber] = useState({
        a:'',
        b:''
    })

    const handleOnChangeNumber = useCallback(e => {
        const { name, value } = e.target;
        setNumber( {...number, [name] : parseInt(value)})
    })

    const handleCalculate = (type) => {
        let result;
        if (/\d/.test(number.a) && /\d/.test(number.b)) {
            if (type === '+') {
                result = number.a + number.b;
                console.log(result);
            } else if (type === '-') {
                result = number.a - number.b;
            } else if (type === '*') {
                result = number.a * number.b;
            } else {
                if (number.a === 0) {
                    result = 'không thể chia';
                }
                result = number.a / number.b;
            }
        } else result = 'Không thể thực hiện phép tính'
        
        props.resultCalculate(result);
    }

  return (
    <>
        <input
            type="text"
            name='a'
            placeholder='Nhập vào số a'
            onChange={e => handleOnChangeNumber(e)}
        /><br />
        <input
            type="text"
            name='b'
            placeholder='Nhập vào số b'
            onChange={e => handleOnChangeNumber(e)}
        /><br />
        <button onClick={ () => handleCalculate('+') }> + </button>
        <button onClick={ () => handleCalculate('-') }> - </button>
        <button onClick={ () => handleCalculate('*') }> * </button>
        <button onClick={ () => handleCalculate('/') }> / </button>
    </>
  )
}

export default Input