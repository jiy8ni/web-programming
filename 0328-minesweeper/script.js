// HTML 요소 가져오기
const board = document.getElementById("board");

// 보드 데이터 배열 생성하기
let boardData = [];

// 보드를 생성하는 함수
function generateBoard() {
    // 10X10 보드 생성하는 반복문
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
        // 보드 셀 생성하기 
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      // 클릭 및 오른쪽 버튼 클릭 이벤트 리스너 추가하기
      cell.addEventListener("click", handleClick);
      cell.addEventListener("contextmenu", handleRightClick);
      // 셀을 보드에 추가
      board.appendChild(cell);
      row.push(0);
    }
    // 보드 데이터 배열에 행을 추가하기
    boardData.push(row);
  }
}

// 지뢰를 심는 함수
function plantMines() {
  let mines = 10;
  // 10개의 지뢰를 심을 것.
  while (mines > 0) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    if (boardData[row][col] === 0) {
      boardData[row][col] = -1;
      mines--;
    }
  }
}

// 셀 클릭 이벤트 처리 함수
function handleClick(event) {
  let row = parseInt(event.target.dataset.row);
  let col = parseInt(event.target.dataset.col);
  // 지뢰를 클릭한 경우, 게임이 끝나게 처리
  if (boardData[row][col] === -1) {
    event.target.classList.add("mine");
    revealMines();
    alert("Game Over!");
  } else {
    // 셀 주변의 지뢰 개수를 세고, 셀에 표시하기
    let count = countMines(row, col);
    if (count === 0) {
      revealEmptyCells(row, col);
    } else {
      event.target.innerText = count;
    }
    event.target.classList.add("clicked");
  }
}

// 오른쪽 버튼 클릭 이벤트 처리 함수
function handleRightClick(event) {
  event.preventDefault();
  let row = parseInt(event.target.dataset.row);
  let col = parseInt(event.target.dataset.col);
  // 클릭한 셀에 깃발을 추가/제거하기
  if (!event.target.classList.contains("clicked")) {
    if (event.target.classList.contains("flagged")) {
      event.target.classList.remove("flagged");
    } else {
      event.target.classList.add("flagged");
    }
  }
}

// 셀 주변의 지뢰 개수를 세는 함수
function countMines(row, col) {
  let count = 0;
  // 주변 8개 셀의 상태를 확인하고, 지뢰 개수를 세어 반환
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i >= 0 && i < 10 && j >= 0 && j < 10 && boardData[i][j] === -1) {
        count++;
      }
    }
  }
  return count;
}

// 빈 셀 주변의 모든 빈 셀을 표시하는 함수
function revealEmptyCells(row, col) {
  if (row < 0 || row >= 10 || col < 0 || col >= 10) {
    return;
  }
  let cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  if (cell.classList.contains("clicked")) {
    return;
  }
  let count = countMines(row, col);
  cell.innerText = count;
  cell.classList.add("clicked");
  if (count === 0) {
    revealEmptyCells(row - 1, col - 1);
    revealEmptyCells(row - 1, col);
    revealEmptyCells(row - 1, col + 1);
    revealEmptyCells(row, col - 1);
    revealEmptyCells(row, col + 1);
    revealEmptyCells(row + 1, col - 1);
    revealEmptyCells(row + 1, col);
    revealEmptyCells(row + 1, col + 1);
}
}

// 모든 지뢰를 표시하는 함수
function revealMines() {
let cells = document.querySelectorAll(".cell");
for (let i = 0; i < cells.length; i++) {
let row = parseInt(cells[i].dataset.row);
let col = parseInt(cells[i].dataset.col);
if (boardData[row][col] === -1) {
cells[i].classList.add("mine");
}
}
}

// 보드 생성, 지뢰 심기
generateBoard();
plantMines();
