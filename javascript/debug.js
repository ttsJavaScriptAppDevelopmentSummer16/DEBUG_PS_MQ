var woolOwners = [
 {
     "master": 1
 },
 {
   "dame": 1
 },
 {
   "little boy": 1,
   "location": "down the lane"
 }
];

var haveYouAnyWool = function() {
//Intialized a total bags variable outside of loop
   var totalBags = 0;
   for (var i = 0; i < woolOwners.length; i++) {
// removed initialization of total bags and instead of adding i, incrementing by 1
//   var totalBags = totalBags + i;
     totalBags = totalBags + 1;
   }
//   return (i);
   return totalBags;
};

//Moved the bags variable definition after function definition, and also invoked the haveYouAnyWool function rather than just assigning it
// var bags = haveYouAnyWool;
var bags = haveYouAnyWool();

function baabaaBlackSheep() {
   console.log("BaaBaa BlackSheep have you any wool?");
   if (bags > 0) {
// Replaced totalBags with bags in console.log
//       console.log("yes sir, yes sir " + totalBags + " bags full");
       console.log("yes sir, yes sir " + bags + " bags full");
 }
}

function oneForMy() {
   for (var i = 0; i < 2; i++) {
// Just added the [i], so that as the for loop iterates, the
       people = Object.keys(woolOwners[i]);
       var person = people.toString();
       console.log("one for my " + person);
   }
}

baabaaBlackSheep();
oneForMy();

var boy = Object.keys(woolOwners[2]);
//changed the index, because [2] is out of bounds for the boy array and also wrong
//var littleBoy = boy[2];
var littleBoy = boy[0];

//Changed littleBoy to woolOwners and provided the correct index in the array
//var whereHeLives = woolOwners.location;
var whereHeLives = woolOwners[2].location;
console.log("one for the " + littleBoy + " that lives " + whereHeLives);
