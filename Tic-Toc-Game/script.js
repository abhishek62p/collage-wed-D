let boxes = document.querySelectorAll(".box");
let display = document.querySelector(".hide");
let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) {
            box.innerText = "X";
            turn0 = false;
        }
        else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
let winner = document.querySelector("#winner");
// document.querySelector("p").style.backgroundColor = "#fff8f3";
const showWinner = (position0) => {
    // display.classList.remove("hide");
    winner.innerText = `Congratulation Winner is ${position0}`;
    disabledBoxes();
};
let winPatterns = [[0, 3 ,6], [1, 4, 7], [2, 5, 8],[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
const checkWinner = () =>{
    for(let winPattern of winPatterns) {
        console.log(winPattern[0], winPattern[1], winPattern[2]);
        let position0 = boxes[winPattern[0]].innerText;
        let position1 = boxes[winPattern[1]].innerText;
        let position2 = boxes[winPattern[2]].innerText;
        // console.log(boxes[winPattern[0]].innerText, boxes[winPattern[1]].innerText, boxes[winPattern[2]].innerText);
        if(position0 != "" && position1 != "" && position2 != "") {
            if (position0 === position1 && position1 === position2) {
                // winner.innerText = "winner";
                console.log("winner", position0);
                showWinner(position0);
                // box.disabled = true;
                
            }
        }
    }
}

let reset = document.querySelectorAll(".reset");
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    // winner.classList.add("hide");
};
enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
reset.forEach((key) => {
    key.addEventListener("click", resetGame);
});
