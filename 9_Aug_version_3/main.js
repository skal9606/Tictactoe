//FUNCTIONS TO SEE WHO THE FIRST PLAYER PICKS (I.E. DONALD OR HILLARY)


var firstPlayer = false;
console.log(firstPlayer);

  var donaldClicked = function () {
    if ( !firstPlayer ) { //this means that if the variable is false
      firstPlayer = "Donald";
      console.log(firstPlayer);
      // var audioTheme = document.querySelector(".hotline");
      // audioTheme.play();
      return firstPlayer;
    } else {
      alert("YOU HAVE ALREADY PICKED A FIRST PLAYER");
    }
  };
  $("#theDonald").on("click",donaldClicked);



  var hillaryClicked = function () {
    if ( !firstPlayer ) {
      firstPlayer = "Hillary";
      console.log(firstPlayer);
      return firstPlayer;
    } else {
      alert("YOU HAVE ALREADY PICKED A FIRST PLAYER");
    }
  };
  $("#hillary").on("click",hillaryClicked);


//FUNCTION TO CHECK WHOSE TURN IT IS AND TO CHECK IF THE GAME HAS BEEN WON

var whoseGo = 0; //the first player will be an even number and the second player will be an odd number
var winCount = 0; //If Donald then winCount will be 1, if Hillary then winCount will be 2

var playerCheck = function () {
  if (firstPlayer !== false){ //This means that you can't click the board unless the firstplayer is set to either Donald or Hillary
      //DONALD IF DONALD IS PLAYER 1: If player 1 is Donald, Donald is X (and Hillary is O)
      if (firstPlayer === "Donald" && whoseGo % 2 === 0) {
        console.log(whoseGo);
        $(this).text("X").css("font-size","0px");
        var $newImg = $("<img></img>");
        $newImg.attr("src","https://images-na.ssl-images-amazon.com/images/I/51K8o6BpgVL._AC_UL320_SR226,320_.jpg").css("height","70px").css("width","70px");
        $(this).prepend($newImg);
        winCount = 1;
        console.log(winCount);
        checkWin ();

      //HILLARY IF DONALD IS PLAYER 1: If player 1 is Donald, Hillary is O (and Donald is X)
      } else if (firstPlayer === "Donald" && whoseGo % 2 !== 0){
        console.log(whoseGo);
        $(this).text("O").css("font-size","0px");
        var $newImgTwo = $("<img></img>");
        $newImgTwo.attr("src","https://3.bp.blogspot.com/-bh6uPWFEes0/VtMCOUBPRmI/AAAAAAAAExM/js7Xm9ftYS0/s1600/usa-election_clinton2.jpg").css("height","70px").css("width","70px");
        $(this).prepend($newImgTwo);
        winCount = 2;
        console.log(winCount);
        checkWin ();

      //HILLARY IF HILLARY IS PLAYER 1: If player 1 is Hillary, Hillary is X (and Donald is O)
      } else if (firstPlayer === "Hillary" && whoseGo % 2 === 0){
        console.log(whoseGo);
        $(this).text("X").css("font-size","0px");
        var $newImgThree = $("<img></img>");
        $newImgThree.attr("src","https://3.bp.blogspot.com/-bh6uPWFEes0/VtMCOUBPRmI/AAAAAAAAExM/js7Xm9ftYS0/s1600/usa-election_clinton2.jpg").css("height","70px").css("width","70px");
        $(this).prepend($newImgThree);
        winCount = 2;
        console.log(winCount);
        checkWin ();

      //DONALD IF HILLARY IS PLAYER 1: If player 1 is Hillary, Hillary is X (and Donald is O)
      } else {
        console.log(whoseGo);
        $(this).text("O").css("font-size","0px");
        var $newImgFour = $("<img></img>");
        $newImgFour.attr("src","https://images-na.ssl-images-amazon.com/images/I/51K8o6BpgVL._AC_UL320_SR226,320_.jpg").css("height","70px").css("width","70px");
        $(this).prepend($newImgFour);
        winCount = 1;
        console.log(winCount);
        checkWin ();
      }
        whoseGo +=1;
        console.log(whoseGo);

      }
    };

$(".square").on("click",playerCheck);




//FUNCTION TO CHECK WHETHER THE GAME HAS BEEN WON
var checkWin = function (player) {
//WIN SCENARIO 1: TOP ROW
  if ($("#cell-one").text()!== ""){
    if ($("#cell-one").text() === $("#cell-two").text()){
      if ($("#cell-one").text() === $("#cell-three").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
            $(".bill").css("position","absolute");
            $(".bill").css("display","block");
            $(".bill").css("top","200px");
            $(".bill").css("left","400px");
            $(".bill").css("z-index","5");
            $(".bill").css("border-radius" ,"10px");
            var videoTheme = document.querySelector(".instagram");
            videoTheme.play();
        }
      }
  }
}


//WIN SCENARIO 2: MIDDLE ROW
  if ($("#cell-four").text()!== ""){
    if ($("#cell-four").text() === $("#cell-five").text()){
      if ($("#cell-four").text() === $("#cell-six").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
          alert("VICTORY for Hillary!");
      }
    }
  }
}

//WIN SCENARIO 3: BOTTOM ROW
  if ($("#cell-seven").text()!== ""){
    if ($("#cell-seven").text() === $("#cell-eight").text()){
      if ($("#cell-seven").text() === $("#cell-nine").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
          alert("VICTORY for Hillary!");
          }
    }
  }
}

//WIN SCENARIO 4: FIRST COLUMN
  if ($("#cell-one").text()!== ""){
    if ($("#cell-one").text() === $("#cell-four").text()){
      if ($("#cell-one").text() === $("#cell-seven").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
          alert("VICTORY for Hillary!");
      }
    }
  }
}

//WIN SCENARIO 5: SECOND COLUMN
  if ($("#cell-two").text()!== ""){
    if ($("#cell-two").text() === $("#cell-five").text()){
      if ($("#cell-two").text() === $("#cell-eight").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
          alert("VICTORY for Hillary!");
        }
    }
  }
}

//WIN SCENARIO 6: THIRD COLUMN
  if ($("#cell-three").text()!== ""){
    if ($("#cell-three").text() === $("#cell-six").text()){
      if ($("#cell-three").text() === $("#cell-nine").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
          alert("VICTORY for Hillary!");
        }
    }
  }
}

//WIN SCENARIO 7: L-R DIAGONAL
  if ($("#cell-one").text()!== ""){
    if ($("#cell-one").text() === $("#cell-five").text()){
      if ($("#cell-one").text() === $("#cell-nine").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
          alert("VICTORY for Hillary!");
        }
    }
  }
}

//WIN SCENARIO 8: R-L DIAGONAL
  if ($("#cell-three").text()!== ""){
    if ($("#cell-three").text() === $("#cell-five").text()){
      if ($("#cell-three").text() === $("#cell-seven").text()){
          if (winCount === 1){
          alert("VICTORY for Donald!");
          } else if (winCount === 2){
          alert("VICTORY for Hillary!");
        }
    }
  }
}

};


//FUNCTION TO RESTART THE GAME ONCE IT HAS BEEN WON AND CLEAR THE BOARD

var restartGame = function () {
  $(".square").text("");
  whoseGo = 0;
  console.log(whoseGo);
  firstPlayer = false;
  winCount = 0;
  console.log("The win count is " + winCount);
};

$("button").on("click", restartGame);
