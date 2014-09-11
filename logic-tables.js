//  NAME:  Chris Castaneda
//  DATE:  September 11th, 2014
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;

p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");
r = confirm("Third value: Click OK for true or Cancel for false.");


// TABLE 1

	if (p && q) 
	{
   		console.log("With " + p + " and " + q +  ", the outcome is TRUE.");
	} 
	else 
	{
    	console.log("With " + p + " and " + q + ", the outcome is FALSE.");
	};
	
// TABLE 2
	
	if (p || q) 
	{
   		console.log("With " + p + " and " + q +  ", the outcome is TRUE.");
	} 
	else 
	{
    	console.log("With " + p + " and " + q + ", the outcome is FALSE.");
	};

// TABLE 3

	if (p && (q||r)) 
	{
    	console.log("With " + p + " and " + q + " or " + r + ", the outcome is TRUE.");
	} 
	 else 
	 {
    	console.log("With " + p + " and " + q + " or " + r + ", the outcome is FALSE.");
	 };
		
// TABLE 4
		
	if ((p && !q) || r) 
	{
    	console.log("With " + p + " and !" + q + " or " + r + ", the outcome is TRUE.");
	} 
	else 
	{
    	console.log("With " + p + " and !" + q + " or " + r + ", the outcome is FALSE.");
	};
	
	
// TABLE 5
	
	if (p || (q||r)) 
	{
    	console.log("With " + p + " or " + q + " or " + r + ", the outcome is TRUE.");
	} 
	else 
	{
    	console.log("With " + p + " or " + q + " or " + r + ", the outcome is FALSE.");
	};
	
	
// Word Problem 1

	var ticketPrice = 12;
	var discountPrice = 7;

	var custAge = parseInt(prompt("What is your age?"));
	
	if (custAge <= 10 || custAge >= 55)
	{
		console.log("You are " + custAge + " years of age so your ticket will cost $" + discountPrice + ".00.");
	}
	else
	{
		console.log("You are " + custAge + " years of age so your ticket will cost $" + ticketPrice + ".00.");
	}

// Word Problem 2

	var frontTires = confirm("Do your front tires have the same pressure? Press OK for YES or Cancel for NO");
	var backTires = confirm("Do your back tires have the same pressure? Press OK for YES or Cancel for NO");
	
	if (frontTires == false || backTires == false)
	{
		console.log("Your car does not meet maintenance standards.");
	}
	else
	{
		console.log("You car meets maintenance standards.");
	};








