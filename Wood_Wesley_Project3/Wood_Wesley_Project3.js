/*
Wesley Wood
09/18/2014
Project 3
*/

// global variables

var name = prompt("What is your name?");
var friend1 = "Kevin";
var friend2 = "Ryan";
var myName = "Wesley";
var miles = 10;
var place = true;
var place2 = false;

function inputFriends()
{
    console.log("Hey " + friend1 + ", hurry up and get here.");
    var poles = prompt("How many fishing poles do you have?");
    console.log("You have brought " + poles + " to go fishing with.");
    
};


// while loop
function fishCaught()
{
    var totalFish = 0;
    while (fish > 0)
    {
        var fish = prompt("How many fish have you caught?");
        totalFish++;
        
        if (fish > 0)
        {
            console.log("You have caught " + fish + "total fish.");
        }
    };
};

// for loop
function milesDriven()
{
        for(var miles = 10; miles > 0; miles -= 1)
    {
            miles--
            console.log("Your miles to go has dropped to " + miles + ".");
    }
};

console.log("My friends" + friend1 + " and " + friend2 + "came fishing with me today.");
