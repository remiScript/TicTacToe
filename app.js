class Player {
    constructor () {

    }
}

class GameBoard {
    constructor() {

    }
    markSquare(params) {
        // logic for marking and X or an O
    }
}

// variables and event listeners
// this gets us a nodelist of the square divs
let squares = document.getElementsByClassName('square');
// lets change that into an array
squares = Array.from(squares);
// so we can create event listeners for each array item
squares.forEach(square => {
    square.addEventListener('click', function markSquare() {
        // fill in either X or O, depending on whos turn it is
        gameBoard.markSquare();
        console.log('Youve clicked square ' + indexOf(square))
    })
})