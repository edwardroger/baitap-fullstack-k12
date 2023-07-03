import React, { useState } from 'react'; //import hook useState
import './App.css';

const placeholderAttribute = 'Đây là placeholder';

const App = () => { //Arrow function
  const [number, setNumber] = useState(0); //number: là biến được khai báo. setNumber: hàm dùng để set lại giá trị cho biến. useState(): hook use state dùng để quản lý các giá trị. 

  const handleOnChange = (event) => { //function handleOnChange nhận 1 event (sự kiện)
    console.log(event.target.value); //target: trỏ đến input. Value: attribute (thuộc tính) của cái input
  }

  // const arrowFunctionSum = (a, b) => a + b //Arrow Function

  // function handleOnChange (event) {  //Function thông thường
  //    return ...
  // }

  const handleOnClick = () => {
    console.log('Clicked the button');
  }

  const handleOnClickIncrease = () => {
    setNumber(number + 1);
  }

  const handleOnClickDecrease = () => {
    setNumber(number - 1);
  }
// bài tập: tạo 1 biến number. 2 button tăng và giảm. in biến ra màn hình.
  return (  //return chỉ nhận 1 vào 1 thẻ HTML duy nhất
    <> 
      <input type="text"
        name="email"
        onChange={(event) => handleOnChange(event)} //onchange="handleOnChange()"
        placeholder={placeholderAttribute}
        value={number}
        />
      <button onClick={handleOnClickIncrease}>Tăng</button>
      <button onClick={handleOnClickDecrease}>Giảm</button>
      {number}
    </>
  )
}

export default App;