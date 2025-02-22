const boardSize = 10;
const mineCount = 15;
let board = [];

function generateBoard() {
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    let minesPlaced = 0;

    while (minesPlaced < mineCount) {
        let x = Math.floor(Math.random() * boardSize);
        let y = Math.floor(Math.random() * boardSize);
        if (board[x][y] !== 'M') {
            board[x][y] = 'M';
            minesPlaced++;
        }
    }
}

function createBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    boardElement.style.gridTemplateColumns = `repeat(${boardSize}, 30px)`;
    boardElement.style.gridTemplateRows = `repeat(${boardSize}, 30px)`;

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList = ("cell rounded-1");
            cell.dataset.x = i;
            cell.dataset.y = j;
            cell.addEventListener('click', revealCell);
            boardElement.appendChild(cell);
        }
    }
}

function revealCell(event) {
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    if (board[x][y] === 'M') {
        event.target.classList.add('mine');
        event.target.textContent = '💣';
        alert('¡Boom! Has perdido.');
        location.reload();
    } else {
        event.target.style.backgroundColor = 'white';
        event.target.textContent = countAdjacentMines(x, y);
    }
}

function countAdjacentMines(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            let nx = x + dx;
            let ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < boardSize && ny < boardSize && board[nx][ny] === 'M') {
                count++;
            }
        }
    }
    return count;
}

generateBoard();
createBoard();