import React, { useState, useCallback } from 'react'

//{}: Object; []: Array
const InputNumber = (props) => {
    const [number, setNumber] = useState({
        numberA: null,
        numberB: null
    }); 

    const handleOnChangeNumber = useCallback(e => {
        // const name = e.target.name && const value = e.target.value
        //e.target.name = input['name']
        //e.target.value = input['value']
        const { name, value } = e.target;
        setNumber({ ...number, [name] : parseInt(value) });
        props.handleSetNumber({ ...number, [name] : parseInt(value) }); //Gọi lại thằng cha
    });

    return (
        <>
            <input type="number"
                name="numberA"
                onChange={ e => handleOnChangeNumber(e) }
                // function (e) {
                //     return handleOnChangeNumber(e)
                // }
            />
            <br />
            <input type="number"
                name="numberB"
                onChange={ e => handleOnChangeNumber(e) }
            />
            <br />
        </>
    )
}

// const functionA = (value) => {
//     return 'function A'
// }

// const functionB = () => {
//     functionA(value)
// }

// export {
//     functionA,
//     functionB,
// }

export default InputNumber