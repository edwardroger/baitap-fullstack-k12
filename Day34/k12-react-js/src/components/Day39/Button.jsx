import React, { useState } from 'react'

const Button = (props) => {
    const handleSum = () => {
        if (props.number.numberA && props.number.numberB) {
            const sum = props.number.numberA + props.number.numberB;
            props.handleSetSum(sum);
        } else {
            props.message('Vui lòng nhập 2 số');
        }
    };

    return (
        <>
            <button onClick={ handleSum }>Tính tổng</button>
            
        </>
    )
}

export default Button