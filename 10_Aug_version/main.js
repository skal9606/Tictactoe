var whoseGo = 0;


//MOVE 1: STARTING THE GAME ONCE THE "START" BUTTON IS PRESSED
var beginGame = function () {
  $("#cell-one").text("X");
  whoseGo =1;
  console.log("Whose go currently = " + whoseGo);
};

$(".start-game").on("click",beginGame); //When the start button is pressed, then the top left cell is filled with an X


//PLAYING THE GAME
var letsPlay = function () {
  if (whoseGo % 2 !== 0) {
    $(this).text("O");
  }
  whoseGo +=2; //goes up by two because the X move is automatic in response to the O i.e. dont click twice
  console.log("The count is " + whoseGo);

  //SCENARIO 1 - MOVE 5
  if ($("#cell-five").text()===$("#cell-two").text() && $("#cell-five").text()==="O"){
      $("#cell-eight").text("X");  //MOVE 5
  } else if ($("#cell-five").text()===$("#cell-eight").text() && $("#cell-five").text()!==""){
      $("#cell-two").text("X"); //MOVE 5
  } else if ($("#cell-five").text()===$("#cell-six").text() && $("#cell-five").text()!==""){
      $("#cell-four").text("X"); //MOVE 5
  } else if ($("#cell-five").text()===$("#cell-four").text() && $("#cell-five").text()!==""){
      $("#cell-six").text("X"); //MOVE 5
  } else {
  }

//SCENARIO 1 - MOVE 7 (MOVE 6 IS NOT NECESSARY TO CODE BECAUSE IT IS HUMAN!)
if ($("#cell-five").text()===$("#cell-one").text() && $("#cell-five").text()==="O"){
    $("#cell-nine").text("X");  //MOVE 7
} else if ($("#cell-five").text()===$("#cell-nine").text() && $("#cell-five").text()!==""){
    $("#cell-one").text("X"); //MOVE 7
} else if ($("#cell-five").text()===$("#cell-three").text() && $("#cell-five").text()!==""){
    $("#cell-seven").text("X"); //MOVE 7
} else if ($("#cell-five").text()===$("#cell-seven").text() && $("#cell-five").text()!==""){
    $("#cell-three").text("X"); //MOVE 7
} else {
}

};

$(".square").on("click", letsPlay);


//SCENARIO 1: SECOND PLAYER ("O") PLAYS FIRST MOVE TO THE CENTER SQUARE
//If P2 plays to the center square then P1 should play to caddy corner square

var centreTile = function () {
  $("#cell-nine").text("X"); //MOVE 3: plays caddy corner after middle tile is O

  $(".edge").on("click",function (){ //MOVE 4
    $(this).text("O");
  });
};

$("#cell-five").on("click", centreTile); //MOVE 2


//SCENARIO 2: SECOND PLAYER ("O") PLAYS HIS FIRST MOVE TO A CORNER square
var scenTwoSubScenOne;
var scenTwoSubScenTwo;
var scenTwoSubScenThree;

// //SCENARIO 2 subscenario 1(player two plays his first move to cell 3)
// var cornerTileA = function () {
//   if (whoseGo === 3){ //MOVE 2
//     $("#cell-seven").text("X");
//   }
// };
//
// $("#cell-three").on("click",cornerTileA);
//
// var cornerTileAB = function () {
// if(whoseGo === 5 && $("#cell-four").text()==="O"){ //MOVE 4
//   $("#cell-nine").text("X");
//   alert("There is no way Player Two can win! X wins!A");
// }
// };
//
// $("#cell-four").on("click",cornerTileAB);
//
// //CHECK THIS!!
// //SCENARIO 2 subscenario 2(player two plays his first move to cell 7)
// var cornerTileB = function () {
//   if (whoseGo === 3){ //MOVE 2
//     $("#cell-three").text("X");
//   }
// };
//
// $("#cell-seven").on("click",cornerTileB);
//
// var cornerTileBB = function () {
// if(whoseGo === 5 && $("#cell-two").text()==="O"){ //MOVE 4
//   $("#cell-nine").text("X");
//   alert("There is no way Player Two can win! X wins!B");
// }
// };
//
// $("#cell-two").on("click",cornerTileBB);
//
// //CHECK THIS!!
// //SCENARIO 2 subscenario 3(player two plays his first move to cell 9)
// var cornerTileC = function () {
//   if (whoseGo === 3){ //MOVE 2
//     $("#cell-three").text("X");
//   }
// };
//
// $("#cell-nine").on("click",cornerTileC);
//
// var cornerTileCB = function () {
// if(whoseGo === 5 && $("#cell-two").text()==="O"){ //MOVE 4
//   $("#cell-seven").text("X");
//   alert("There is no way Player Two can win! X wins!C");
// }
// };
//
// $("#cell-two").on("click",cornerTileCB);
