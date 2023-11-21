
//////////////////////////////////
// constants
//////////////////////////////////

const colors = {
    0: 'white',
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
let board // an array of 7 nested arrays
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
function renderBoard() {


}

// render controls -> changes the visibility of the play again button
function renderControls() {

}

// render message -> display whose turn it is
function renderMessage() {

}

// render -> call all of our render based functions at once
function render() {
    // call renderBoard
    renderBoard()
    // call renderMessage
    renderMessage()
    // call renderControls
    renderControls()
}

// handleDrop -> this will be the main gameplay function, finds the marker that was clicked on, and drops to the bottommost position allowed
function handleDrop(event) {
 
}




//////////////////////////////////
// event listeners
//////////////////////////////////
// what events will happen, what they should be attached to, and what functions they call
// click on a marker (to make a move)
document.getElementById('markers').addEventListener('click', boxClicked)
// click play again (initialize an empty board) (reset all variables)
playAgainButton.addEventListener('click', init)