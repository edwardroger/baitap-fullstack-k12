import React, { useState} from 'react'
import './Calculate.css'

const Calculate = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [calculation, setCalculation] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [result, setResult] = useState('')

    const handleClickNumber = (value) => {
        if (calculation === '') {
            setNumber1(number1 + value)
            setValueInput(valueInput + value)
        } else {
            setNumber2(number2 + value)
            setValueInput(valueInput + value)
        }
    }

    const handleClickCalculation = (value) => {
        if (result === '') {
            setCalculation(value)
            setValueInput(number1 + value)
        } else {
            let previousResult = result
            setNumber1(previousResult)
            setNumber2('')
            setCalculation(value)
            setValueInput(previousResult + value)
        }
    }

    const handleClickResult = () => {
        if (number1 !== '' && number2 !== '') {
            if (calculation === '+') {
                setResult(parseFloat(number1) + parseFloat(number2))
            } else if (calculation === '-') {
                setResult(parseFloat(number1) - parseFloat(number2))
            } else if (calculation === 'x') {
                setResult(parseFloat(number1) * parseFloat(number2))
            } else if (calculation === '÷') {
                if (number1 !== '0') {
                    setResult(parseFloat(number1) / parseFloat(number2))
                } else {
                    setResult('Không thể thực hiện phép tính')
                }
            } else {
                setResult(parseFloat(number1) % parseFloat(number2))
            }
        } else {
            setResult('Hãy nhập đủ phép tính')
        }
    }

    const handleClickDelete = () => {
        setNumber1('')
        setNumber2('')
        setCalculation('')
        setValueInput('')
        setResult('')
    }
  return (
    <>
        <div className="calculate">
            <div className="calculate-screan">
                <input value={valueInput} disabled></input>
                <input value={result} disabled></input>
            </div>
            <hr />
            <div className="calculate-key">
                <div className='key-delete' onClick={ handleClickDelete }> AC </div>
                <div onClick={ () => handleClickCalculation('%') }> % </div>
                <div onClick={ () => handleClickCalculation('÷') }> ÷ </div>
                <br />
                <div onClick={ () => handleClickNumber('7') }> 7 </div>
                <div onClick={ () => handleClickNumber('8') }> 8 </div>
                <div onClick={ () => handleClickNumber('9') }> 9 </div>
                <div onClick={ () => handleClickCalculation('x') }> x </div>
                <br />
                <div onClick={ () => handleClickNumber('4') }> 4 </div>
                <div onClick={ () => handleClickNumber('5') }> 5 </div>
                <div onClick={ () => handleClickNumber('6') }> 6 </div>
                <div onClick={ () => handleClickCalculation('-') }> - </div>
                <br />
                <div onClick={ () => handleClickNumber('1') }> 1 </div>
                <div onClick={ () => handleClickNumber('2') }> 2 </div>
                <div onClick={ () => handleClickNumber('3') }> 3 </div>
                <div onClick={ () => handleClickCalculation('+') }> + </div>
                <br />
                <div onClick={ () => handleClickNumber('0') }> 0 </div>
                <div onClick={ () => handleClickNumber('.') }> . </div>
                <div className='key-result' onClick={ handleClickResult }> = </div>
            </div>
        </div>
    </>
  )
}

export default Calculate