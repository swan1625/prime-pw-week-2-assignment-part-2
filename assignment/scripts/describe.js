// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane'
// we set a conditional statement to if name is 'Mary', we will console.log a message that says 'Hi Mary!'
// we set an else conditional that says if name is not 'Mary', we will console.log a message that says "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare 'secret' and 'code' as a varible and set it to 123 as a number
// we set an conditional that says if 'code' is exactly equal to 123, varible 'secret' will change to 'super' and the code will be multplied by 2
// we set another conditional that says if 'code' is greatet then 250, 'secret' is now changed to 'duper'
// we console.log 'secret'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare 'isStudent' a varible and set a boolean to true
// We declare 'age' a varible and set it to 34
// We declare 'zip' a varible and set it to 55407
// we set a conditional that says if 'isStudent' is true and zip is less then 80000, console.log will have a message that says "you're a student on the west coast!"
// we set and else if condtional that says if 'isStudent' is false and age is less then 30, console.log will have a message that says "What are your hobbies?"
// we set and else if condtional that says if 'isStudent' is true, console.log will be "Welcome to Prime!"
// we set and else conditonal that will take any other information and spit out "How about this weather?"
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be blue
let colorOne = 'red';

// FIX - colorTwo should be Red
let colorTwo = 'blue';

let mix = true;


//FIX - only colorOne is set to purple, both colorOne and colorTwo should set
// should be colorone, colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}


*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;

//FIX - const is not what we want to use here, we want to us let time = 4
const time = 4;

//FIX - Instructions said if both temp and time not or. replace || with &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

/// FIX - mixed up console.logs , entry should be first and the second else should be no entry
/// also, i would write the first if statement as (age => minAge) just because it looks better and easier to read :)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
