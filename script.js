const allBoxes = document.querySelectorAll(".game-box");

let player1 = "O";
let player2 = "X";

let currentPlayer = player1;
let board = ["", "", "", "", "", "", "", "", ""];

function gameStart() {
    allBoxes.forEach(box => {
        box.addEventListener("click", function (e) {

            const index = e.target.dataset.index;

            if (board[index] !== "") return;

            board[index] = currentPlayer;
            console.log(board);

            if (currentPlayer === player1) {
                e.target.style.backgroundImage = "url('Assests/Icons/O-Final.png')";
            }
            else {
                e.target.style.backgroundImage = "url('Assests/Icons/X-Final.png')";
            }

            e.target.style.backgroundSize = "cover";
            e.target.style.backgroundPosition = "center";

            currentPlayer = (currentPlayer === player1) ? player2 : player1;
        })
    })
}

gameStart();

