import React from 'react'

const Button = (props) => {
    // const [message, setMessage] = useState()
    // const [sum, setSum] = useState()
    const handleSum = () => {
        if (props.number.numberA && props.number.numberB) {
            props.handleSetSum(props.number.numberA + props.number.numberB)
        } else {
            props.message('Vui lòng nhập 2 số')
        }
    }

  return (
    <>
        <button onClick={ handleSum }>Tính tổng</button>
        <br />
    </>
  )
}

export default Button