// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

// import {Box} from './components/Box.js';
import { Board } from './components/Board';
import { ScoreBoard } from './components/ScoreBoard';
import { ResetButton } from './components/ResetButton';

function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6]
  ]


  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setOverGame] = useState(false)

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    const winner = CheckWinner(updatedBoard);


    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      }
    }

    setBoard(updatedBoard);

    setXPlaying(!xPlaying);
  }

  const CheckWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log(board[x]);
        setOverGame(true)
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setOverGame(false);
    setBoard(Array(9).fill(null))
  }

  // const board = ["X","X","X","X","X","X","X","X","X"];

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
      {/* <Box value="X" onClick={null}/> */}
    </div>
    // <>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // {/* <div className="login"></div>
    // <div className="register"></div> thêm <></> thì mới dùng được nhiều div ko thì chỉ 1 */}
    // </>


  );
}





// const App = () => { //Arrow function

//   const handleOnChange = (event) => { //function handleOnChange nhận 1 event ( sự kiện)
//     console.log(event.target.value) //target: trỏ đến input. Value: attribite (thuộc tính)
//   }

//   const placeholderAttribute = ' Đây là placehlder';
//   // const arrowFunctionSum = (a, b) => a + b //Arrow Function

//   // function handleOnChange(event) {
//   //   return ...
//   // }

//   const handleOnClick = () => { //function handleOnChange nhận 1 event ( sự kiện)
//     console.log('Clicked the button') //target: trỏ đến input. Value: attribite (thuộc tính)
//   }

//   const [number, setNumber] = useState(0);

//   const Tang = () => {
//     setNumber(number + 1);
//   };

//   const Giam = () => {
//     if (number > 0) {
//       setNumber(number - 1);
//     }
//   };

//   const handleInputChange = (event) => {
//     setNumber(parseInt(event.target.value));
//   };

//   console.log(number)

//   return ( //return chỉ nhận 1 vào 1 thẻ HTML duy nhất
//     <>
//       <input type="text" name='email' 
//       onChange={(event) => handleOnChange(event)}
//       placeholder={placeholderAttribute} 
//       />
//       <button onClick={handleOnClick}>Increase</button>
//       {placeholderAttribute}

//       <input type="number" id="inputNumber" value={number} onChange={handleInputChange} />
//       <button onClick={Tang}>Tăng</button>
//       <button onClick={Giam}>Giảm</button>
//       {number}
//     </>

//   )
// }

export default App;
