// Function: Piece of code to perform specific tasks
/**
 * function <functionName> (params) {
 * // code
 * }
 */

function greet(name) {
  // code
  console.log("Hello " + name);
}

// function call
greet("Ram");
greet("Hari");
greet("Rohan");
greet("Sita");
greet("Rita");

function square(number) {
  console.log(number * number);
}

square(5);
square(745);
square(8);

function addition(number1, number2) {
  console.log(number1 + number2);
}

addition(6, 15);
addition(25, 75);

addition("ram", "shrestha");
addition("ram", 12);

// Return type
function percentage(score, total = 50) {
  const percent = (score / total) * 100;

  return percent;
}

const result = percentage(20);

console.log(result);

// Local vs global variable

const name = "Ram"; // global

console.log(name);

function test() {
  const age = 20; // local
  console.log(name);
  console.log(age);
}

test();
