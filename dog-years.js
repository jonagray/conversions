'use strict';

//Define my current age
let myAge = 25;

//A dog ages more rapidly in their first two years
let earlyYears = 2;

earlyYears *= 10.5;

//Defines the later years of a dog's life
let laterYears = myAge - 2;

//Calculate number of dog years accounted for by later years
laterYears *= 4;

//To get your age in dog years, add the two variables together
let myAgeInDogYears = earlyYears + laterYears;

//Set variable for my name
let myName = `Jonny`.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);