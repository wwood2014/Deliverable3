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
    var totalFish = 0;// local variable
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
        for(var miles = 10; miles > 0; miles -= 1)//local variable
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
        timeDriven = 15;
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

console.log("\n\nIf we go fishing at both places, we will taken an additional 15 minutes driving.")
//miles driven function
milesDriven();

console.log("\n\nWe will catch a lot of fish.");
// fish caught function
fishCaught();


var addFish = function(firstFish, secondFish)
{
        var amount = firstFish * secondFish;
        return outcome;
};
var fishLoop = function()
{
    
};

console.log("Everytime you catch a fish it add a fish to" + fishCaught);
console.log("When you catch a bigger fish people come from a distance to see.");
returnValue = addFish(2,3);
console.log("\n\nYour total fish caught are " + returnValue);
returnValue = addFish (4, 6);
console.log("Your new total fish caught is" + returnValue);

//argument
var fishSpots = ["Bokeelia", " Punta Rassa", " Matlacha"];//array
var timePerSpot = [30, 15, 25]//number for array

var useOneSpot = function(spotName, timePerSpot)
{
        console.log("\n\nWe chose" + spotName + " fishing spot " + timePerSpot + " minutes were spent fishing.");
        
        for (var time = 70; time < timePerSpot; time += 15)
        {
                var timeLeft = timePerSpot - time;
                console.log(time + "finished" + timeLeft + "remaining");
        }
        console.log("The " + spotName + " has been chosen!");
};
useOneSpot(fishSpots, timePerSpot);
//argument

console.log("After fishing for 4 hours, we start running out of bait.");
//Math
var buyBait = function(total)
{
        var priceForBait = 5;
        var bait;
        
        if (total < priceForBait)
        {
                console.log("You don't have enough money to buy bait.");
                return;
        }
        bait = Math.floor(total / priceForBait);
        return bait;
};
var gotBait = buyBait(50);
console.log("You bought " + gotBait + " bait.");