console.log("this is a test")

let board = []; 

function play(clickedId){
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)

    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
        board[clickedId] = "X"
    } else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = "O"
    }

console.log(board); 

let topLeft = board[0]
let topCenter = board[1]; 
let topRight = board[2]; 

let centerLeft = board[3]; 
let centerCenter = board[4]; 
let centerRight = board[5]; 

let bottomLeft = board[6]; 
let bottomCenter = board[7]; 
let bottomRight = board[8]; 


// check across
if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
    alert(`${topRight} is the winner`)
    // return;
}

if (centerRight !== undefined && centerRight === centerCenter && centerRight === centerLeft) {
    alert(`${centerRight} is the winner`)
    // return;
}

if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft) {
    alert(`${bottomRight} is the winner`)
    // return;
}

//check vertical 
if (bottomRight !== undefined && bottomRight === centerRight && bottomRight === topRight) {
    alert(`${bottomRight} is the winner`)
    // return;
}

if (bottomCenter !== undefined && bottomCenter === centerCenter && bottomCenter === topCenter) {
    alert(`${bottomCenter} is the winner`)
    // return;
}

if (bottomLeft !== undefined && bottomLeft === centerLeft && bottomLeft === topLeft) {
    alert(`${bottomLeft} is the winner`)
    // return;
}

// check criss-cross
if (topLeft !== undefined && topLeft === centerCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`)
    // return;
}

if (topRight !== undefined && topRight === centerCenter && topRight === bottomLeft) {
    alert(`${topRight} is the winner`)
    // return;
}

let boardFull = true
for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
   
}
if (boardFull === true) {
    alert("There is no Winner")
}
}