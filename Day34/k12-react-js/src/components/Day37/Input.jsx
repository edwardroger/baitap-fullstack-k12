import React, {useState, useCallback} from 'react'

const Input = () => {

    // const [numberA, setNumberA] = useState();
    // const [numberB, setNumberB] = useState();

    // khai báo number ={a='', b =''}
    const [number, setNumber] = useState({
        a: '',
        b: ''
    });
    const [result, setResult] = useState(0);

    // const hanldeOnChangeNumberA = (e) => {
    //     console.log(e.target.value)
    //     setNumberA(parseInt(e.target.value))
    // }

    // const hanldeOnChangeNumberB = (e) => {
    //     setNumberB(parseInt(e.target.value))
    // }

    const hanldeOnChangeNumber = (e, key) => {
        let twinNumber = { ...number};
        twinNumber[key] = parseInt(e.target.value)
        setNumber({
            ...twinNumber
        })
    }

    // const hanldeOnChangeNumber = useCallback(e => {
    //     const {name, value} = e.target;
    //     setNumber({ ...number, [name] : parseInt(value) });
    // }); 
    //cái trên giống cái dưới nhưng cái trên hiện lỗi do ko có dependency [number] hoặc [] ưu tiên [number] nhưng vẫn chạy được.

    // const hanldeOnChangeNumber = useCallback(e => {
    //     const {name, value} = e.target;
    //     setNumber({ ...number, [name] : parseInt(value) });
    // }, [number]);

    const handleOnClick = () => {
        // setResult(numberA + numberB);
        setResult(number.a + number.b)
    }

  return (
    <>
        <div className="form">
            <input type="text"
                name='a'
                placeholder='Nhập vào số a'
                // onChange={e => hanldeOnChangeNumberA(e) }
                onChange={e => hanldeOnChangeNumber(e, 'a') }
                // onChange={e => hanldeOnChangeNumber(e) }
            />
            <br />
            <input 
                type="text" 
                name='b'
                placeholder='Nhập vào số B'
                // onChange={e => hanldeOnChangeNumberB(e) }
                onChange={e => hanldeOnChangeNumber(e, 'b') }
                // onChange={e => hanldeOnChangeNumber(e) }
            />
            <br />
            <button onClick= { handleOnClick} >+</button>
            <span>= { result }</span>
        </div>
    </>
  )
}

export default Input