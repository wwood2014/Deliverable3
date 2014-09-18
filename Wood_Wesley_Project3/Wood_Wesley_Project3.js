/*
Wesley Wood
09/18/2014
Project 3
*/

// global variables

var friend1 = "Kevin";
var friend2 = "Ryan";
var myName = "Wesley";
var miles = 10;
var place = true;

// prompt

var myPrompt = prompt("Tell me your name.");

//Procedure

var personFunction = function(personName) {
    if (personName === "Kevin") {
        console.log("You are one of my best friends.")
    } else {
        console.log("Hello", personName, "do I know you from somewhere?")
    }
};