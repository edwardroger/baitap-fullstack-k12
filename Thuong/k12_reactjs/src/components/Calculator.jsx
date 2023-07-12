import React, { useState } from 'react'; 
import './Calculator.css'

var arryPhep = [];
var boolResult = false;

const Calculator = ()=>{
    const [numberA , setA]  = useState("");
    const [result, setResutl] = useState();
    // const [arryNumber,setAryy] = useState();
    const [screnn , setScreen]  = useState("");

    function MathNhanChia() {
        while (arryPhep.indexOf('*') > -1 || arryPhep.indexOf('/') >-1){
            for(let i = 0 ;i < arryPhep.length-1;i++){
                if (arryPhep[i] === '*') {
                    arryPhep[i-1] = arryPhep[i-1] * arryPhep[i+1];
                    arryPhep.splice(i,2);
                }
                if (arryPhep[i] === '/') {
                    arryPhep[i-1] = arryPhep[i-1] / arryPhep[i+1];
                    arryPhep.splice(i,2);
                }
            }           
            console.log(arryPhep);
        }
        
    }
    function MathCongTru () {
        while (arryPhep.length !== 1){
            for(let i = 0 ;i < arryPhep.length-1;i++){
                if (arryPhep[i] === '+') {
                    arryPhep[i-1] = arryPhep[i-1] + arryPhep[i+1];
                    arryPhep.splice(i,2);
                }
                if (arryPhep[i] === '-') {
                    arryPhep[i-1] = arryPhep[i-1] - arryPhep[i+1];
                    arryPhep.splice(i,2);
                }
            }           
            console.log(arryPhep);
        }
    }
    const handleOnClickMath = (math) => {
        if (numberA === "") {
            arryPhep.push(0);
        } else {
            arryPhep.push(parseFloat(numberA));
        }
        console.log(arryPhep);
        setA("");
        if (math === '='){
            // arryNumber.push(numberA);
            // setA(0);
            // console.log(arryMath);
            // console.log(arryNumber);
            
            MathNhanChia();
            MathCongTru();
            setResutl(arryPhep[0]);
            boolResult =true;
        }else {
            //setMathB(math);
            // arryMath.push(mathB);
            
            arryPhep.push(math);
            setScreen(screnn+math);

        }
       // setA(math);
        

    } 
    const handleOnClickNumber = (number) => {
        // if(number == '.') {
        //     setA(numberA + number);
        // }else {
        //     setA(numberA + number);
        // }
        if (boolResult) {
            handleOnClickReset();
            boolResult = false;
        }
        setA(numberA + number);
        setScreen(screnn+number);

    }
    const handleOnClickReset = () => {
        setA("");
        setScreen("");
        setResutl("");
        arryPhep.splice(0,arryPhep.length);
        console.log(arryPhep);
    }
    const handleOnClickPercent  = () => {
        if(result){
            setResutl(result / 100);
        }else{
            
        }
    }
    return (
        <>
        <div className="body-calcuator">
            <div className="screens">
                <div className='screen' >
                    {screnn}
                </div> 
                <div className="result-sc">
                    {result}
                </div>
            </div>

            <br />
            <button onClick= {  handleOnClickReset } >AC</button>
            <button>+/-</button>
            <button onClick= {  handleOnClickPercent } >%</button>
            <button onClick= { () => handleOnClickMath('/')} >/</button>
            <br />
            <button onClick= { () => handleOnClickNumber(7) } >7</button>
            <button onClick= { () => handleOnClickNumber(8) } >8</button>
            <button onClick= { () => handleOnClickNumber(9) } >9</button>
            <button onClick= { () => handleOnClickMath('*')} >x</button>
            <br />
            <button onClick= { () => handleOnClickNumber(4) } >4</button>
            <button onClick= { () => handleOnClickNumber(5)} >5</button>
            <button onClick= { () => handleOnClickNumber(6)} >6</button>
            <button onClick= { () => handleOnClickMath('-')} >-</button>
            <br />
            <button onClick= { () => handleOnClickNumber(1) } >1</button>
            <button onClick= { () => handleOnClickNumber(2)} >2</button>
            <button onClick= { () => handleOnClickNumber(3) } >3</button>
            <button onClick= { () => handleOnClickMath('+')} >+</button>
            <br />
            <button className='numberZero'onClick={() => handleOnClickNumber(0)}>0</button>
            <button onClick= { () => handleOnClickNumber('.')} >.</button>
            <button onClick= { () => handleOnClickMath('=')}  >=</button>
        </div>
        
        </>
    )

}

export default Calculator