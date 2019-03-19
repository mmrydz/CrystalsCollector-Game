// THINGS TO DO:
// MAKE THE GAME REGENERATE RANDOM NUMBER AND GEM VALUES ON PLAYAGAIN (use a reset function)
// DISPLAY MESSAGE ON WINS/LOSSES BOX "YOU LOSE" OR "YOU WIN" ON THOSE CONDITIONS (use https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)


$( document ).ready(function() {
  console.log( "ready!" );
    
  // With the format arranged with html and the styling set by css, we then add the dynamic functionality with javascript.

   // Step 1: Let's set up our game var.  

  var game = {
    totalscoreNum: 0,
    wins: 0,
    losses: 0,
    gameon: true,
    playagain: true,
    randomnumber: [Math.floor(Math.random() * 120) + 19] ,
    fourgems: [(Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 )],

    winner: function() {
      this.wins = (this.wins + 1);
      this.totalscoreNum = 0;
      randomnumber = [Math.floor(Math.random() * 120) + 19];
      fourgems = [];
      fourgems = [(Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 )];
      this.fourgems = parseInt(this.fourgems);
      this.gameon = false;
      console.log(this.randomnumber);
      console.log(this.fourgems);
    }, 

    gameover: function() {
      this.losses = (this.losses + 1);
      this.totalscoreNum = 0;
      randomnumber = [Math.floor(Math.random() * 120) + 19];
      fourgems = [];
      fourgems = [(Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 )];
      this.fourgems = parseInt(this.fourgems);
      this.gameon = false;
      console.log(this.randomnumber);
      console.log(this.fourgems);
    },

    playagain: function() {
      this.totalscoreNum = 0;
      this.randomnumber = Math.floor(Math.random() * 120) + 19;
      this.randomnumber = parseInt(this.randomnumber);
      $("#randomnumber").text(this.randomnumber);
      fourgems = [];
      fourgems = [(Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 )];
      this.fourgems = parseInt(this.fourgems);
      this.gameon = true;
      console.log(this.randomnumber);
      console.log(this.fourgems);
    }
  };

  // Let's console.log our data so we can debug as needed:

    console.log("random number " + game.randomnumber);
    console.log("four gems: " +  game.fourgems);

  // We'll rewrite our stats during gametime:

  function reWriteStats() {
    console.log("Wins: " + game.wins);
    console.log("Losses: " + game.losses);
    console.log("Score so far: " + game.totalscoreNum);
    console.log("------------------------------");
  }
  
  // We push all relevent current values to the html:
  
    $("#randomnumber").text(game.randomnumber),
    $("#totalscoreNum").text(game.totalscoreNum);
    $("#wins").text(game.wins);
    $("#losses").text(game.losses);
  
  // We'll spell out how we'll convey wins and losses to the html as required:

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    
  // We assign our gem image buttons their values. We'll do that with a for loop.

    for (var i = 0; i < game.fourgems.length; i++) {

    // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src","./assets/images/" + i + ".jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", game.fourgems[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added
    // in the crystalsbox as defined in the html.
      $("#crystals").append(imageCrystal);
  }

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
    $("#alert-lose").text(" ");
    $("#alert-win").text(" ");

    // If the totalscoreNum === randomnumber, then the player wins and the # of wins increases by 1.  
    // If the totalscoreNum > randomnumber, player loses and the # of losses increases by 1.

    if (game.totalscoreNum === game.randomnumber) {
      game.winner();
      $("#alert-lose").text("You win!");
      reWriteStats();
      game.playagain();
      }

    else if (game.totalscoreNum > game.randomnumber) {
      game.gameover();
      $("#alert-lose").text("You lose!");
      reWriteStats();
      game.playagain();
  }

  winsText.textContent = "wins: " + game.wins;
  lossesText.textContent = "losses: " + game.losses;

  



  
    // Win or loss, the randomnumber and crystalValues are re-generated, and the totalscoreNum is reset to zero. 
    // These functions were written in steps 1 and 2.



  });
});