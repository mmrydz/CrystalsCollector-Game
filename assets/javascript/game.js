var randomnumber = Math.floor(Math.random() * 120) + 19  ;

randomnumber = parseInt(randomnumber);

console.log(randomnumber);

var counter = 0;

// We begin by expanding our array to include all possible options for all three buttons.

var gemoptionsstart = 1;
var gemoptionsend = 12;
var gemoptions = [];


// We identify all possible options for the buttons and put them in an array named gemoptions:
for (var i = gemoptionsstart; i <gemoptionsend + 1; i++) {
    gemoptions.push(i);
}

console.log(gemoptions);

// We randomly select 4 of these possible options from that array using a for loop utilizing 
// the same method we used on the random number with a push at the end:

var gemvalues = [];
var gemvalue;

for (gemvalue = 0; step < 4; gemvalue++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log(gemvalue);
}

for (var i = gemoptionsstart; i <gemoptionsend + 1; i++) {
  gemoptions.push(i);
}

// new array to push random item in
let fourgems = []
do {
let item = getRandomItem(gemoptions);
fourgems.push(item);

// update the original array and remove the recently pushed item

fourgems.splice(fourgems.indexOf(item), 1);
count++;
} while(count < n);

console.log(gemoptions);
console.log(fourgems);

var item = items[Math.floor(Math.random()*items.length)];

var randomnumber1 = Math.floor(Math.random() * gemoptionsend) + gemoptionsstart  ;
randomnumber1 = parseInt(randomnumber1);
console.log(randomnumber1);

var randomnumber2 = Math.floor(Math.random() * gemoptionsend) + gemoptionsstart  ;
randomnumber2 = parseInt(randomnumber2);
console.log(randomnumber2);

var randomnumber3 = Math.floor(Math.random() * gemoptionsend) + gemoptionsstart  ;
randomnumber3 = parseInt(randomnumber3);
console.log(randomnumber3);

var randomnumber4 = Math.floor(Math.random() * gemoptionsend) + gemoptionsstart  ;
randomnumber4 = parseInt(randomnumber4);
console.log(randomnumber4);

// We assign each of these numbers to an image.



// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < gemoptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", url(".../images/bluecrystal.jpg") + i + url("./images/greencrystal.jpg") + i + url("./images/redcrystal.jpg") + i + url("./images/bluecrystal.jpg"));

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
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
