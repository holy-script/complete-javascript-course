// LECTURE: Values and Variables

let country = "India";
let continent = "Asia";
let populationInMillions = 1395.57;
console.log(country);
console.log(continent);
console.log(populationInMillions);


// LECTURE: Data Types

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof populationInMillions);
console.log(typeof country);
console.log(typeof language);


// LECTURE: let, const and var

language = "Hindi";
// isIsland = true;
// console.log(isIsland);


// LECTURE: Basic Operators

console.log(populationInMillions / 2);
populationInMillions++;
console.log(populationInMillions);
const finlandPopulationInMillions = 6;
const averagePopulationInMillions = 33;
console.log(populationInMillions > finlandPopulationInMillions);
console.log(populationInMillions < averagePopulationInMillions);
let description = country + " is in " + continent + ", and its " + populationInMillions + " million people speak " + language;
console.log(description);

// Coding Challenge 1

// const massMark = 78,
//     massJohn = 92,
//     heightMark = 1.69,
//     heightJohn = 1.95;
const massMark = 95,
    massJohn = 85,
    heightMark = 1.88,
    heightJohn = 1.76;
const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

//Coding Challenge 2

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn})is higher than Mark's (${bmiMark})!`);
}