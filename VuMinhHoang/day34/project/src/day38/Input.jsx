import React, {  useState } from "react";


const Input = ({ onChange }) => {
    const [input, setInput] = useState({ inputA: undefined, inputB: undefined })
    const [result, setResult] = useState(0)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => ({ ...prevInput, [name]: parseInt(value) }));
    };
    const handleCal = (cal) => {
        switch (cal) {
            case '+':
                setResult(input.inputA + input.inputB);
                break;
            case '-':
                setResult(input.inputA - input.inputB);
                break;
            case '*':
                setResult(input.inputA * input.inputB);
                break;
            case '/':
                setResult(input.inputA / input.inputB);
                break;
            default:
                setResult(0);
        }
    };

    if (onChange) {
        onChange(parseInt(result));
    }
    return (<>
        <input type="text" name="inputA" onChange={handleInputChange} /><br />
        <input type="text" name="inputB" onChange={handleInputChange} /><br />
        <button onClick={() => handleCal('+')}>+</button>
        <button onClick={() => handleCal('-')}>-</button>
        <button onClick={() => handleCal('*')}>*</button>
        <button onClick={() => handleCal('/')}>/</button>
    </>)
}
export default Input