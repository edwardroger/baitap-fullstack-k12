import React, { useState } from 'react'

const Button = (props) => {
    // const [sum, setSum] = useState();
    // const [message, setMessage] = useState('');

    const handleSum = () => {
        if (props && props.number && (props.number.numberA && props.number.numberB)) { //Check tồn tại của 2 biến numberA và numberB
            props.handleSetSum(numberA + numberB);
        } else {
            props.message('Vui lòng nhập 2 số');
        }
    }

    return (
        <>
            <button onClick={handleSum}>Tính tổng</button>
        </>
    )
}

export default Button