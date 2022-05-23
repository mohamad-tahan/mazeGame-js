window.onload = function () {
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var game = document.getElementById("game");
    var boundary = document.querySelectorAll(".boundary");
    var score = 0;
  
  
  
    start.addEventListener("mouseover", function () {
      liveTime();
      for (var i = 0; i < boundary.length; i++) {
        
        document.getElementById("status").innerHTML = "Game Has Started :)";
        boundary[i].addEventListener("mouseover", function () {
          for (var i = 0; i < boundary.length; i++) {
            boundary[i].classList.add("youlose");
            document.getElementById("status").innerHTML =
              "You Lost. Press S to reload.";
              myStopFunction()
          }
  
          score -= 10;
          document.querySelector(".example").innerHTML = "score= " + score;
        });
      }
    });
  
    cheat();
    endGame();
    restart();
  };

  function cheat() {
    game.addEventListener("mouseleave", function () {
      document.getElementById("status").innerHTML =
        "THAT'S CHEATING. Press S to reload.";
      myStopFunction();
    });
  }

  function endGame() {
    end.addEventListener("mouseover", function () {
      document.getElementById("status").innerHTML = "You Won!!!";
      score = +5;
      document.querySelector(".example").innerHTML = "score= " + score;
      myStopFunction();
    });
  }

  function restart() {
    start.addEventListener("click", function () {
      window.location.reload();
    });
  }