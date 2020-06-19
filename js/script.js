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



var vacationType= prompt("What kind of trip would you like to go on, Musical, Tropical, or Adventerous?");
if (vacationType == "Musical") {
   destination= "New Orleans";
} 
 if (vacationType == "Tropical") {
   destination = "Beach Vacation in Mexico";
} 
 if  (vacationType == "Adventerous") {
   destination= "Whitewater Rafting the Grand Canyon";
} 





var groupSize= prompt("How many people are in your group?");
if (groupSize == 1,2) { 
 travelSuggestion= "First Class"
}
 if (groupSize > 2 < 6) {
    travelSuggestion= "Helicopter"
}
if  (groupSize > 6) {
 travelSuggestion= "Charter Flight" 
}






var result= "Since you are a group of "+ groupSize  +  " going on a " +
 vacationType  +  " trip " + "you should take a "  + travelSuggestion + " to " + destination;
console.log(result);





