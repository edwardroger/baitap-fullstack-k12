import './App.css';
import React, { useState } from 'react';

const App = () => { //Arrow funtion
  const [number, setNumber] = useState(0); //number: là biến khai báo. setNumber: hàm dùng đẻ set lại giá trị cho biến. useState(): hook use state dùng để quản lý các giá trị
  // let number = 0;

  const placeholder = 'Đây là placeholder'
  const handleOnChange = (event) => {//funtion handleOnChange nhận 1 event (sự kiện)
    // console.log(event.target.value); //target: trỏ đến input. Value: attribute (thuộc tính)
    // console.log(document.getElementById('textInput').value);
    // document.getElementsByClassName('result')[0].innerHTML = `${+document.getElementById('textInput').value}`;
  }

  const handleDecrease = () => {
    setNumber(number - 1);
    // number -= 1;
  }

  const handleIncrease = () => {
    setNumber(number + 1);
    // number += 1;
  }

  const styles = {
    color: 'red',
    fontSize: '50px',
    textAlign: 'center'
  };
  // bài tập: tạo 1 biến number. 2 button tăng và giảm. in biến ra màn hình
  return ( // return chỉ nhận vào 1 thẻ html duy nhất
    <>
      <button onClick={handleDecrease}>Decrease</button>
      <input 
        type="text" 
        name="textInput"
        id='textInput' 
        onChange={(event) =>handleOnChange(event)} //onchange="handleOnChange()"
        placeholder={placeholder}
        value={number}
      />
      <button onClick={handleIncrease}>Increase</button>
      <div>
        <h1>Kết quả</h1>
        <div style={styles}>{number}</div>
      </div>
    </>
  )
}

export default App;
