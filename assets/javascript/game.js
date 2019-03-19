// *** Can't figure out how to update the images' data values on "play again" even though I am successfully generating
// new values ***

$( document ).ready(function() {
  console.log( "ready!" );
    
  // With the format arranged with html and the styling set by css, we then add the dynamic functionality with javascript.

   // Set up game var to instruct events in the on-click:  

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
      this.totalscoreNum = 0;
      this.gameon = true;
    }
  };

  // Set all random numbers and console.log all stats:

    var randomnumber = [Math.floor(Math.random() * 120) + 19] ;
    var fourgems = [(Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 )];
  
    console.log("random number: " + randomnumber);
    console.log("four gems: " + fourgems);
    console.log("Wins: " + game.wins);
    console.log("Losses: " + game.losses);
    console.log("------------------------------");  
  
  // Push all relevent current values to the html: 
    $("#randomnumber").text(randomnumber),
    $("#totalscoreNum").text(game.totalscoreNum);
    $("#wins").text(game.wins);
    $("#losses").text(game.losses);

  // Spell out how to convey wins and losses to the html as required:

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    
    // Replace the random numbers on playagain (specified in on-click event):
    function deleteRandomNums() {
      randomnumber = [];
      fourgems = [];
    }
  
    function replaceRandomNums() {
      randomnumber.push(Math.floor(Math.random() * 120) + 19);
      $("#randomnumber").text(randomnumber);
      fourgems.push((Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ), (Math.floor(Math.random() * 12) + 1 ));
      console.log("random number: " + randomnumber);
      console.log("four gems: " + fourgems);
      console.log("Wins: " + game.wins);
      console.log("Losses: " + game.losses);
      console.log("------------------------------");  
    }

  // Assign the gem image buttons their values. We'll do that with a for loop:
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

  // Set up the on-click event to add points to the total score with each click:
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

    if (game.totalscoreNum === randomnumber) {
      game.winner();
      $("#alert-lose").text("You win!");
      game.playagain();
      deleteRandomNums();
      replaceRandomNums();
      }

    else if (game.totalscoreNum > randomnumber) {
      game.gameover();
      $("#alert-lose").text("You lose!");
      game.playagain();
      deleteRandomNums();
      replaceRandomNums();
  }

  winsText.textContent = "wins: " + game.wins;
  lossesText.textContent = "losses: " + game.losses;

  });
});