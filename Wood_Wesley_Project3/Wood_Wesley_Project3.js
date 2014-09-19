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
var returnValue;

function inputFriends()
{
    console.log("\n\nHey " + friend1 + ", hurry up and get here.");
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
console.log("\We decided to go fishing at the Bokeelia Pier.");
console.log(friend1 + " decided to use cut bait for fishing.");
console.log(friend2 + " decided to use shrimp as bait.");
console.log(friend1 + friend2 + myName + " were ready to fish.");

var read = prompt("Are you ready to continue?");
{
        if (read == "Yes" || read == "yes")
        {
            console.log("\n\nCatch the biggest fish you can!");
        }
        else if (read == "No" || read == "no")
        {
            console.log("\n\nTake as much time as you need.");
        }
        else
        {
         console.log("\n\nAre you ready?");
        }
}

if (place === true)
{
        timeDriven = timeDriven + 15;
        if (place2 === true)
        {
                timeDriven = timeDriven + 15;
                console.log("Since we're going fishing at both places, we will be driving" + timeDriven + " minutes total.");
        }
        else
        {
                console.log("Since we're only going fishing at Bokeelia, we'll only be driving " + timeDriven + "minutes.");    
        }
}
else
{
        console.log("Your total time driven stayed the same at " + timeDriven + " minutes.");
}