// Initialize the board array
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  
  // Variable to keep track of the current player ('X' or 'O')
  let currentPlayer = 'X';
  
  // Function to handle cell click
  function handleCellClick(row, col) {
    if (board[row][col] === '') {
      // Update the board array with the current player's symbol
      board[row][col] = currentPlayer;
  
      // Update the cell display
      document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
  
      // Check for a win condition
      if (checkWinCondition(row, col)) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
        return;
      }
  
      // Check for a draw condition
      if (checkDrawCondition()) {
        alert('It\'s a draw!');
        resetGame();
        return;
      }
  
      // Switch the current player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  
  // Function to check for a win condition
  function checkWinCondition(row, col) {
    const symbol = currentPlayer;
  
    // Check row
    if (
      board[row][0] === symbol &&
      board[row][1] === symbol &&
      board[row][2] === symbol
    ) {
      return true;
    }
  
    // Check column
    if (
      board[0][col] === symbol &&
      board[1][col] === symbol &&
      board[2][col] === symbol
    ) {
      return true;
    }
  
    // Check diagonal
    if (
      (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
      (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
    ) {
      return true;
    }
  
    return false;
  }
  
  // Function to check for a draw condition
  function checkDrawCondition() {
    // Check if all cells are filled
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === '') {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Function to reset the game
  function resetGame() {
    // Clear the board array
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  
    // Clear the cell displays
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  
    // Reset the current player to 'X'
    currentPlayer = 'X';
  }