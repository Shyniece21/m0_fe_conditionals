// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
// console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log(numberTeachers > numberStudents)

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log(numberTeachers === stringTeachers)

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log(numberTeachers <= numberStudents)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log(numberStudents >= 20)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log(numberStudents >= 21)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log(numberStudents <= 20)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log(numberStudents <= 21)

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//This evaluates that four is less than nine. This would log as true.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//This explains that 4 is less than the amount of books which is 3. In this case this would log as faulse due to 3 being less than 4.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain. This explains that amount of friends is greater than the amount of siblings. In this case this would be true because the friends variable is assigned as 6 and the siblings variable is assigned as two making friends greater than siblings.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// This explains that the number of attendees is not strictly equal to the number of meals. In this case this would log as true because the number of meals shows as 8 which is not equal to the number of meals which shows as 9.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 1)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line of code evaluated as true. This is because both variables met the the condition that both had to be true in order for the condition to be met and log as true.