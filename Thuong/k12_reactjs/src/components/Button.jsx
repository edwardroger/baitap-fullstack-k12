import React from "react";

const Button = (props) => {


    const MathSum = () => {
       if( props.Datanumber.numberA && props.Datanumber.numberB){
        props.handleMathSum( props.Datanumber.numberA + props.Datanumber.numberB);
       }else {
        console.log("error");
       }
    }

    return (
        <>
        <br /> <br />
        <button style={{width : "50px" , height :"30px"}}  onClick={ MathSum }> Tính</button>
        
        </>
    )
}

export default Button