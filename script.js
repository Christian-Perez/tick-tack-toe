
// game mechanics & DOM
var axis;
var board;
var domBoard = document.getElementById('board');
var domBoxes = document.getElementsByClassName('box');
var boxClicked;

// game logic
var whosTurn = 'x';
var winner;

// domBoard.addEventListener("click", function(){
//
// });
// document.getElementById("1a").innerHTML = "test";


// // Creates / Resets the Board // //
function createNewBoard(){
  axis = ['x', 'x', 'x'];
  board = [axis, axis];
  winner = false
  domBoard.style.backgroundColor = 'rgb(107, 40, 22)';
} createNewBoard();
// / add event listeners / //
  for(var i = 0; i < domBoxes.length; i++){
    domBoxes[i].addEventListener('click', function(){
    boxClicked = this;
      takeTurn();
      // this.style.backgroundColor = 'yellow';
    });
    // console.log('box ' + i + '')
}

  // document.getElementsByClassName('box')[0].addEventListener('click', function(){
  //   console.log('click');
  // })


// axis = ['z', 'z', 'z']; //*test

// board[2][2].innerHTML = 'koala';

// // Play // //

function takeTurn(){
  // whosTurn === '"x"' ? whosTurn = 'x again' : whosTurn = 'y';

  //change DOM (style add x/o)
  if(whosTurn === 'x'){
    boxClicked.style.backgroundColor = 'rgb(44, 117, 104)';
  }else{
    boxClicked.style.backgroundColor = 'rgb(227, 122, 45)';
  }
  // end turn
  if(whosTurn === 'x'){
    whosTurn = 'o';
  } else {
    whosTurn = 'x';
  }
}
// add click listener
// get element
// store var playerSelection = ...
// change backgroundColor = '' & innerHTML = ''

// var hasName = (name === 'true') ? 'Y' :'N';

// console.log('working2');
// document.findElementByClassName

// console.log("test");
//   console.log("");


// / check for winner / //
// for (var i  = 0; i < board[1]; i++){
//   //board[][] // function
//   console.log("test2");
// }
//    que user  + style
// if winner == true){
//   console.log('a winner has been found');
// }{else}{console.log('it worked')};
