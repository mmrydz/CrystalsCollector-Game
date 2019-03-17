$( document ).ready(function() {
  console.log( "ready!" );
  
  // With the format arranged with html and the styling set by css, we then add the dynamic functionality with javascript.

  // Step 1: We start by generating a random number from 19 to 120 (per instructions)
  // and log this as the computer's random number (and converting it from string to integer):

  var randomnumber = Math.floor(Math.random() * 120) + 19  ;

  randomnumber = parseInt(randomnumber);

  console.log(randomnumber);

  // We return this number to the webpage in the randomnumberbox:

  $("#randomnumber").text(randomnumber);

  // Step 2: We set up an array of possible values for the four gem buttons.
  var gemupperlimit = 12;
  var gemlowerlimit = 1;

  var gemvalues = [];
  for (var i = gemlowerlimit; i <= gemupperlimit; i++) {
      gemvalues.push(i);
  }

  // Shuffle the gemvalues array and pop off the last four of the shuffled array.
  // OR do a for loop to randomly select a number, delete it from the array,
  // choose another random number, delete it from the array, and so on.
  // With either approach, you extract four unique numbers.
  

  // Step 3: I decided to take the shuffle approach:

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

  console.log(fourgems);
  
  // Step 5: We've now established all of the randome numbers we need.  Now we have to
  // assign our gem image buttons their values. Then we can set up the on-click events.

  // Step 4: We select the first four numbers in the array as the values for our four gems.
  // We do it this way so that we have four unique numbers with no repeats.
  // for (var i = 0; i < 4; i++) {
  //   var imageCrystal = $("<img>");
  //   imageCrystal.addClass("crystal-image");
  //   imageCrystal.attr("src", url(".../images/bluecrystal.jpg") + i + url("./images/greencrystal.jpg") + i + url("./images/redcrystal.jpg") + i + url("./images/bluecrystal.jpg"));
  //   imageCrystal.attr("data-crystalvalue", fourgems[i]);
  //   $("#crystals").append(imageCrystal);
  // }



  // Step 3: We assign each of the gem values to a gem image button:


  // Next we create a for loop to create crystals for every value in fourgems:
    for (var i = 0; i < fourgems.length; i++) {

    // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", fourgems[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added
    // in the crystalsbox as defined in the html.
      $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
});