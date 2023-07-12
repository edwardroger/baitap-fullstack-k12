import React, { useState, useCallback } from 'react'

// {}: object; []: Array
const InputNumber = (props) => {
    const [number, setNumber] = useState({
        numberA: null,
        numberB: null
    });

    const handleOnChangeNumber = useCallback(e => {
        const { name, value } = e.target;
        setNumber({ ...number, [name]: parseFloat(value) })
        props.handleSetNumber({...number, [name]: parseFloat(value)})
    });
  return (
    <>
        <input type="number"
            name='numberA'
            onChange={e => handleOnChangeNumber(e)}
        />
        <br />
        <input type="number"
            name='numberB'
            onChange={e => handleOnChangeNumber(e)}
        />
        <br />
    </>
  )
}

// const functionA = () => {
//     console.log('functionA');
//     return 'functionA'
// }

// const functionB = () => {
//     console.log('functionB');
//     return 'functionB'
// }

// export {
//     functionA,
//     functionB
// }

export default InputNumber