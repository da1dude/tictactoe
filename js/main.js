
//////////////////////////////////
// constants
//////////////////////////////////

const colors = {
    null: 'white',
    1: 'purple',
    // if we want to use a negative number for a key
    // we can use a string
    '-1': 'orange'
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//////////////////////////////////
// state variables
//////////////////////////////////
// things that we want to constantly check, refer to, and change.
// these will allow us to properly render changes at the right time.
let board 
let turn // will be a value of 1 or -1 (1 || -1)
let winner // null || 1 || -1 || 'T'

//////////////////////////////////
// cached DOM elements
//////////////////////////////////
// grab our HTML elements, save them to variables, and use later
const message = document.querySelector('h2')
const playAgainButton = document.querySelector('button')

//////////////////////////////////
// functions
//////////////////////////////////

// function - init - initializes an empty game.
// the init function runs one time when the page loads
// then the init function will be called again from the play again button

function init() {
    // set values for our state variables
    turn = 1
    winner = null
    board = [null, null, null, null, null, null, null, null, null]

    // CALL THE RENDER FUNCTION ONCE THE RENDER FUNCTION IS BUILT
    render()
}

init()

// function - renderBoard - render the game board
//arrow function like connect4
function renderBoard() {
    board.forEach((boxVal, index) => {
        const boxEl = document.getElementById(index)
        boxEl.style.backgroundColor = colors[boxVal]
        console.log('squareEl value', boxEl)
        console.log('boxVal value', boxVal)
        console.log('board array', board)
    })
}


// // render controls -> changes the visibility of the play again button
// function renderControls() {

// }

// render message -> display whose turn it is
function renderMessage() {
    // message a tie
    if (winner === 'T') {
        message.innerText = "Tie!"
    // message a winner
    } else if (winner) {
        message.innerHTML = `<span style="color: ${colors[winner]}">${colors[winner].toUpperCase()}</span> WINS!`;
    // or the current turn
    } else {
        message.innerHTML = `<span style="color: ${colors[turn]}">${colors[turn].toUpperCase()}</span>'s Turn`;
    }
}

// render -> call all of our render based functions at once
function render() {
    // call renderBoard
    renderBoard()
    // call renderMessage
    renderMessage()
}

//handles the action of when the box is clicked. This is alot like handledrop connect4 other than figuring out the index
//I glanced at the try not to peak for this. My idea wasnt exactly the same.
function boxClicked(event) {
    // obtain index of box
    const index = event.target.id;  
    console.log("index clicked, should update array with 1/-1", index)
    if (board[index] || winner) return
        //if index taken or winner.. dont have winner working...
    board[index] = turn; //fought with this... forgot to update array with the turn value
    console.log("board array status after each turn", board)
    turn *= -1
    //winner = getWinner();
    render()
}


// 5.6) Set the winner variable if there's a winner:
// 5.6.1) Loop through the each of the winning combination arrays defined.
// 5.6.2) Total up the three board positions using the three indexes in the current combo.
// 5.6.3) Convert the total to an absolute value (convert any negative total to positive).
// 5.6.4) If the total equals 3, we have a winner! Set winner to the board's value at the index specified by the first index in the combo array. Exit the loop.
// 5.7) If there's no winner, check if there's a tie:
// 5.7.1) Set winner to 'T' if there are no more nulls in the board array.
// 5.8) All state has been updated, so render the state to the page (step 4.2).

// getWinner() {
   /* ive tried to wrap my head around converting to absolute value
        im just not sure what to do with it just because I dont understand how
        it works.  I looked up math.abs on MDM and I guess it doesnt have great
        examples to apply to this.

        I think i could probably figured out how to use the connect 4 stratagy...
        Ive spent too many hours attempting to figure it out. */
// }



//////////////////////////////////
// event listeners
//////////////////////////////////
// what events will happen, what they should be attached to, and what functions they call
// click on a marker (to make a move)
document.getElementById('board').addEventListener('click', boxClicked)
// click play again (initialize an empty board) (reset all variables)
playAgainButton.addEventListener('click', init)