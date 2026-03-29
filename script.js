const allBoxes = document.querySelectorAll(".game-box");
const oPoints = document.querySelector(".o-display");
const xPoints = document.querySelector(".x-display");
const winnerDisplay = document.querySelector(".winner-display");
const drawDisplay = document.querySelector(".draw-display");

let oCounter = 0;
let xCounter = 0;

let player1 = "O";
let player2 = "X";

let currentPlayer = player1;
let board = ["", "", "", "", "", "", "", "", ""];

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

function gameStart() {
    allBoxes.forEach(box => {
        box.addEventListener("click", function (e) {
            const index = e.target.dataset.index;

            if (board[index] !== "") return;

            board[index] = currentPlayer;
            console.log(board);

            if (currentPlayer === player1) {
                e.target.style.backgroundImage = "url('Assests/Icons/O-Final.png')";
                e.target.style.backgroundColor = "#28b3de";
            }
            else {
                e.target.style.backgroundImage = "url('Assests/Icons/X-Final.png')";
                e.target.style.backgroundColor = "#ffdd00";
            }

            e.target.style.backgroundSize = "cover";
            e.target.style.backgroundPosition = "center";

            const winner = winCheck();

            if (winner) {
                winner.forEach(index => {
                    allBoxes[index].style.backgroundColor = "#4cf227";
                });
                // setTimeout(() => alert(board[winner[0]] + " wins!"), 150);
                winnerDisplay.value = currentPlayer;
                if (currentPlayer === player1) {
                    oCounter++;
                    oPoints.value = oCounter;
                }
                else {
                    xCounter++;
                    xPoints.value = xCounter;
                }
                setTimeout(() => resetOnType(), 1000);
                return;
            }

            if (board.every(cell => cell !== "")) {
                // setTimeout(() => alert("Draw!!"), 150);
                drawDisplay.value = "Draw!";
                setTimeout(() => resetOnType(), 1000);
                setTimeout(() => drawDisplay.value = "",1000);
                return;
            }

            currentPlayer = (currentPlayer === player1) ? player2 : player1;
        })
    })
}

function winCheck() {
    for (let condition of winCondition) {
        const [a, b, c] = condition;
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
            // setTimeout(() => alert(board[a] + " wins!"), 150);
            // board[a].style.backgroundColor = board[b].style.backgroundColor = board[c].style.backgroundColor = "green";
            return condition;
        }
    }
    return null;
}

function resetBoard() {
    allBoxes.forEach(box => {
        box.style.backgroundImage = "";
        box.style.backgroundColor = "";
    })
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = player1;
}

function resetOnType() {
    allBoxes.forEach(box => {
        box.style.backgroundImage = "";
        box.style.backgroundColor = "";
    })
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = player1;
}

function resetPoints() {
    oPoints.value = "";
    oCounter = 0;
    xPoints.value = "";
    xCounter = 0;
    winnerDisplay.value = "";
    resetOnType();
}

gameStart();

