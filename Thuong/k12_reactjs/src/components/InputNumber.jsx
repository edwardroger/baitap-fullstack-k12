import React,{useCallback , useState} from "react";


const InputNumber = (props) => {
    const [number , setNumber] = useState({
        numberA : null,
        numberB : null
    });
    const handleOnChangenumber = useCallback (e => {
        const {name , value} = e.target;
        setNumber({...number, [name] : parseInt(value)});
        props.handleSetnumber({...number, [name] : parseInt(value)});
    });
    return (
        <>
        <input type="text" name="numberA" onChange={ e => handleOnChangenumber(e) }/>
        <br />
        <input type="text" name="numberB" onChange={ e => handleOnChangenumber(e) } />
        {/* {number.numberA + number.numberB} */}
        </>
    )
}
export default InputNumber