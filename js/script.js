// var vactionType= Musical, Tropical, Adventerous
// var groupSize= 1-2, 3-5, 6+
// var result= First Class, Helicopter, Charter Flight



// write out logic for program --how it should run
        
// conditional statements -- if else 

// vacation type var -- if vacation musical destination new

// otherwise if its tropical -- then beach vacation 

// otherwise if adventerous then white water rafting 


// if 1-2 -- first class etc.


// result:  contact -- combine all in one string 

// console.log (result) -- will print out string

var vacationType, destination;

var vacationType  = ["Musical", "Tropical", "Adventerous"];
var vacationType = ["New Orleans", "Beach Vacation in Mexico", "Whitewater Rafting the Grand Canyon"];
var destination;

var vacationType= "Musical"
var vacationType= "Tropical"
var vacationType= "Adventerous"

var vacationType= prompt("What kind of trip would you like to go on?");
if (vacationType == "Musical") {
   destination= "New Orleans";
} 
 if (vacationType == "Tropical") {
   destination = "Beach Vacation in Mexico";
} 
 if (vacationType == "Adventerous") {
   destination= "Whitewater Rafting the Grand Canyon";
} 


var groupSize, travel;

var groupSize = [1,2,3,4,5,6,7,8,9,10];
var  groupSize = ["First Class", "Helicopter", "Charter Flight"];



var groupSize= prompt("How many people are in your group?");
if (groupSize == 1, 2) {
 travel= "First Class";
}
if (groupSize == 3, 4, 5) {
    travel= "Helicopter";
}
if (groupSize == 6, 7, 8, 9, 10) {
 travel= "Charter Flight"; 
}

var travel= prompt("What travel suggestion would you like?");
if (travel == "First Class") {
    groupSize= 1,2;
   }
   if (travel == "Helicopter") {
    groupSize= 3,4,5;
   }if (travel == "Charter Flight") {
    groupSize= 6,7,8,9,10;
   }




var result;
var result= ("vacationType", "+", "groupSize");
console.log('Since you are a group of '+ groupSize + ' '+ 'going on a ' +
 vacationType + ' '+ 'trip ' + 'you should take a '  + travel + ' '+ 'to' + ' ' + destination);






