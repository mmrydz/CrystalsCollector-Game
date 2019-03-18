// THINGS TO DO:
// MAKE THE GAME STOP AND RESET RANDOM NUMBERS AND CUMULATIVE SCORE ON WIN OR LOSE
// ADD WIN OR LOSE TO STATS
// DISPLAY MESSAGE ON WINS/LOSSES BOX "YOU LOSE" OR "YOU WIN" ON THOSE CONDITIONS


$( document ).ready(function() {
  console.log( "ready!" );
    
  // With the format arranged with html and the styling set by css, we then add the dynamic functionality with javascript.


  // Step 1: Let's set up our game var. First we'll set our totalscoreNum, wins and losses to 0, and 
  // we reflect this upon refresh.  This will come into play in the on-click event.

  var game = {
    totalscoreNum: 0,
    wins: 0,
    losses: 0,
    gameon: true,
    playagain: true,

    winner: function() {
      this.wins = (this.wins + 1);
      this.totalscoreNum = 0;
      this.gameon = false;
    }, 

    gameover: function() {
      this.losses = (this.losses + 1);
      this.totalscoreNum = 0;
      this.gameon = false;
    },

    playagain: function() {
      alert("Let's play again!"); 
      this.totalscoreNum = 0;
    }
  };

  // Step 2: We generate a random number from 19 to 120 (per instructions)
  // and log this as the computer's random number (and converting it from string to integer):

  var randomnumber = Math.floor(Math.random() * 120) + 19  ;

  randomnumber = parseInt(randomnumber);

  console.log(randomnumber);

  // We return this number to the webpage in the randomnumberbox:

  $("#randomnumber").text(randomnumber);

  // Step 3: We set up an array of possible values for the four gem buttons.

  var gemupperlimit = 12;
  var gemlowerlimit = 1;

  var gemvalues = [];
  for (var i = gemlowerlimit; i <= gemupperlimit; i++) {
      gemvalues.push(i);
  }

  console.log(gemvalues);

  // Step 4: Shuffle the gemvalues array to ensure we later extract four unique values for our crystal buttons.

  function shuffle(gemvalues) {
    var ctr = gemvalues.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
        index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
        ctr--;
      // And swap the last element with it
        temp = gemvalues[ctr];
        gemvalues[ctr] = gemvalues[index];
        gemvalues[index] = temp;
    }
    return gemvalues;
  }

  console.log(shuffle(gemvalues));
  
  // Step 4: We then slice out four values from the array.  These will be
  // assigned to gem image buttons. In this case, I decided to slice off the last
  // four values from the shuffled array:
  
  var fourgems = gemvalues.slice(-4);
  
  // Step 5: We've now established all of the random numbers we need.  Now we have to
  // assign our gem image buttons their values. We'll do that with a for loop.

    for (var i = 0; i < fourgems.length; i++) {

    // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src","./assets/images/" + i + ".jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", fourgems[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added
    // in the crystalsbox as defined in the html.
      $("#crystals").append(imageCrystal);
  }
    
  console.log(fourgems);

  // It all looks good. Crystals are in the right spots.


// Logs all of our car's current stats to the console.
function reWriteStats() {
  console.log("Wins: " + game.wins);
  console.log("Losses: " + game.losses);
  console.log("Score so far: " + game.totalscoreNum);
  console.log("Random number: " + randomnumber);
  console.log("4 gem values: " + fourgems);
  console.log("------------------------------");
}

  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");

// We push these values to the html.

  $("#totalscoreNum").text(game.totalscoreNum);
  $("#wins").text(game.wins);
  $("#losses").text(game.losses);

  // Step 6: Now we're ready to set up our on-click event! This will affect every crystal image button.

  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the totalscoreNum.

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // We then add the crystalValue to the user's totalscoreNum which is a global variable. We had set it = 0 at the top of our script.
    // Every click, from every crystal adds to the global totalscoreNum.  

    game.totalscoreNum += crystalValue;

    $("#totalscoreNum").text(game.totalscoreNum);

    // If the totalscoreNum === randomnumber, then the player wins and the # of wins increases by 1.  
    // If the totalscoreNum > randomnumber, player loses and the # of losses increases by 1.

    if (game.totalscoreNum === randomnumber) {
      game.winner();
      reWriteStats();
      game.playagain();
      }

    else if (game.totalscoreNum > randomnumber) {
      game.gameover();
      reWriteStats();
      game.playagain();
  }

  winsText.textContent = "wins: " + game.wins;
  lossesText.textContent = "losses: " + game.losses;

    // Win or loss, the randomnumber and crystalValues are re-generated, and the totalscoreNum is reset to zero. 
    // These functions were written in steps 1 and 2.

  });
});