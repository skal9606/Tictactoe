//FUNCTION TO CHECK WHOSE TURN IT IS AND TO CHECK IF THE GAME HAS BEEN WON
var whoseGo = 0;

var playerCheck = function () {
  if (whoseGo % 2 === 0) {
    //this means it is player 1's go
    $(this).text("X").css("font-size","0px");
    var $newImg = $("<img></img>");
    $newImg.attr("src","https://images-na.ssl-images-amazon.com/images/I/51K8o6BpgVL._AC_UL320_SR226,320_.jpg").css("height","70px").css("width","70px");
    $(this).prepend($newImg);
    checkWin ("X");
    //NEED TO ALSO CHECK IF THE PLAYER HAS WON
  } else {
    $(this).text("O").css("font-size","0px");
    var $newImgTwo = $("<img></img>");
    $newImgTwo.attr("src","https://3.bp.blogspot.com/-bh6uPWFEes0/VtMCOUBPRmI/AAAAAAAAExM/js7Xm9ftYS0/s1600/usa-election_clinton2.jpg").css("height","70px").css("width","70px");
    $(this).prepend($newImgTwo);
    checkWin ("O");
    //NEED TO CHECK IF THE PLAYER HAS WON
  }
  whoseGo +=1;
  if (whoseGo === 9) {
    alert("No one won!");
  }
};


$(".square").on("click",playerCheck);


//FUNCTION TO CHECK WHETHER THE GAME HAS BEEN WON
var checkWin = function (player) {
//WIN SCENARIO 1: TOP ROW
  if ($("#cell-one").text()!== ""){
    if ($("#cell-one").text() === $("#cell-two").text()){
      if ($("#cell-one").text() === $("#cell-three").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

//WIN SCENARIO 2: MIDDLE ROW
  if ($("#cell-four").text()!== ""){
    if ($("#cell-four").text() === $("#cell-five").text()){
      if ($("#cell-four").text() === $("#cell-six").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

//WIN SCENARIO 3: BOTTOM ROW
  if ($("#cell-seven").text()!== ""){
    if ($("#cell-seven").text() === $("#cell-eight").text()){
      if ($("#cell-seven").text() === $("#cell-nine").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

//WIN SCENARIO 4: FIRST COLUMN
  if ($("#cell-one").text()!== ""){
    if ($("#cell-one").text() === $("#cell-four").text()){
      if ($("#cell-one").text() === $("#cell-seven").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

//WIN SCENARIO 5: SECOND COLUMN
  if ($("#cell-two").text()!== ""){
    if ($("#cell-two").text() === $("#cell-five").text()){
      if ($("#cell-two").text() === $("#cell-eight").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

//WIN SCENARIO 6: THIRD COLUMN
  if ($("#cell-three").text()!== ""){
    if ($("#cell-three").text() === $("#cell-six").text()){
      if ($("#cell-three").text() === $("#cell-nine").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

//WIN SCENARIO 7: L-R DIAGONAL
  if ($("#cell-one").text()!== ""){
    if ($("#cell-one").text() === $("#cell-five").text()){
      if ($("#cell-one").text() === $("#cell-nine").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

//WIN SCENARIO 8: R-L DIAGONAL
  if ($("#cell-three").text()!== ""){
    if ($("#cell-three").text() === $("#cell-five").text()){
      if ($("#cell-three").text() === $("#cell-seven").text()){
        alert("The game is over!. Player " + player + " has won.");
      }
    }
  }

};


//FUNCTION TO RESTART THE GAME ONCE IT HAS BEEN WON AND CLEAR THE BOARD

var restartGame = function () {
  $(".square").text("");
};

$("button").on("click", restartGame);
