class GameBoard {
    constructor() {
        this.currentTurn = 'X'
        this.winner = '';
    }
    markSquare(square, index) {
        // logic for marking and X or an O
        console.log('Youve clicked square ' + (index + 1))
        if (square.innerText == '') {
            square.innerText = this.currentTurn;
        }
        this.determineWinner();
        this.turnToggle();
    }

    determineWinner() {
        // logic for determining a winner and declaring it
        if (sq1.innerText == 'X' && sq2.innerText == 'X' &&  sq3.innerText == 'X' ||
            sq4.innerText == 'X' && sq5.innerText == 'X' &&  sq6.innerText == 'X' ||
            sq7.innerText == 'X' && sq8.innerText == 'X' &&  sq9.innerText == 'X' ||
            sq1.innerText == 'X' && sq4.innerText == 'X' &&  sq7.innerText == 'X' ||
            sq2.innerText == 'X' && sq5.innerText == 'X' &&  sq8.innerText == 'X' ||
            sq3.innerText == 'X' && sq6.innerText == 'X' &&  sq9.innerText == 'X' ||
            sq3.innerText == 'X' && sq5.innerText == 'X' &&  sq7.innerText == 'X' ||
            sq1.innerText == 'X' && sq5.innerText == 'X' &&  sq9.innerText == 'X') {
                
                // clear board
                this.clearBoard();

                // indicate winner
                this.winner = 'X';
                window.alert(this.winner + ' wins!')
        }
        else if (sq1.innerText == 'O' && sq2.innerText == 'O' &&  sq3.innerText == 'O' ||
            sq4.innerText == 'O' && sq5.innerText == 'O' &&  sq6.innerText == 'O' ||
            sq7.innerText == 'O' && sq8.innerText == 'O' &&  sq9.innerText == 'O' ||
            sq1.innerText == 'O' && sq4.innerText == 'O' &&  sq7.innerText == 'O' ||
            sq2.innerText == 'O' && sq5.innerText == 'O' &&  sq8.innerText == 'O' ||
            sq3.innerText == 'O' && sq6.innerText == 'O' &&  sq9.innerText == 'O' ||
            sq3.innerText == 'O' && sq5.innerText == 'O' &&  sq7.innerText == 'O' ||
            sq1.innerText == 'O' && sq5.innerText == 'O' &&  sq9.innerText == 'O') {
                
                // clear board
                this.clearBoard();

                // indicate winner
                this.winner = 'O';
                window.alert(this.winner + ' wins!')

        } else if(sq1.innerText !== '' && sq2.innerText !== '' &&  sq3.innerText !== '' &&
                  sq4.innerText !== '' && sq5.innerText !== '' &&  sq6.innerText !== '' &&
                  sq7.innerText !== '' && sq8.innerText !== '' &&  sq9.innerText !== ''){
                // clear board
                this.clearBoard();

                // indicate winner
                this.winner = 'No one';
                window.alert(this.winner + ' wins!')
                
        }

    }
    turnToggle() {
        // possibly need a separate function for switching turns?
        // variable for whos turn it is, switches between 1 an 0 every turn
        // then some conditional logic wherever needed that does 1 of 2 things
        // depending on the value of the turn variable
        if(this.currentTurn == 'X') {
            turnIndicator.innerText = 'Player O - Your Turn!'
            this.currentTurn = 'O';
        } else if (this.currentTurn == 'O') {
            turnIndicator.innerText = 'Player X - Your Turn!'
            this.currentTurn = 'X'
        }
        console.log(this.currentTurn);
    }
    clearBoard() {
        squares.forEach(square => {
            square.innerText = '';
        });
    }
}

// variables and event listeners
// this gets us a nodelist of the square divs
let squares = document.getElementsByClassName('square');
let turnIndicator = document.querySelector('[data-turn');
let sq1 = document.querySelector('[data-sq1');
let sq2 = document.querySelector('[data-sq2');
let sq3 = document.querySelector('[data-sq3');
let sq4 = document.querySelector('[data-sq4');
let sq5 = document.querySelector('[data-sq5');
let sq6 = document.querySelector('[data-sq6');
let sq7 = document.querySelector('[data-sq7');
let sq8 = document.querySelector('[data-sq8');
let sq9 = document.querySelector('[data-sq9');

let gameBoard = new GameBoard()

// lets change that into an array
squares = Array.from(squares);

// so we can create event listeners for each array item
squares.forEach((square, index) => {
    square.addEventListener('click', function markSquare() {
        // fill in either X or O, depending on whos turn it is
        gameBoard.markSquare(square, index);
        

    })
})