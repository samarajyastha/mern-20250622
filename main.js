// Print
console.log("hello ram");

// Variable: Its is a memory element
var age = 20;
var name = "Ram";
var isMale = false;

console.log(age);

var age = 30;
console.log(age);

// Note: NEVER USE var for variable declaration
// Always use const, unless let is required.

// let, const
let phone = 79846461;
phone = 87641615;
console.log(phone);

// Data types
/**
 * 1. String "Ram"
 * 2. Number 20
 * 3. Boolean true
 * 4. Object {name:"Ram"}
 * 5. Array [123,345,545]
 */

const address = "Dharan"; // String
const postalCode = 56700; // Number
const mobile = "79846541"; // String
const isAdult = false; //boolean

console.log(address);
console.log(postalCode);
console.log(mobile);

// Object, key value pair
const profile = {
  age: 20,
  name: "Hari",
  address: {
    city: "Dharan",
    province: "Koshi",
  },
  phone: [234215, 3463456, 45674567],
};

console.log(profile["address"]["province"]);
console.log(profile.age);

// Array, index value (position), index always starts from ZERO
const marks = [20, 30, 65, 85, 45, 20, "ram", true, { science: 40 }, ["good"]];
console.log(marks[6]);

const myArray = ["ram", "sam", "hari"];
console.log(myArray[2]);

/** Operators
 * 1. Arithmetic operation: +, -, *, /, %
 * 2. Relational operation: >, <, ==, >=, !=, ===
 * 3. Logical operation: && (AND), || (OR), NOT (!)
 */

console.log(5 + 6);
console.log(5 - 6);
console.log(5 * 6);
console.log(12 / 5);
console.log(14 % 5);

console.log(5 > 6);
console.log(5 < 6);
console.log(5 < 5);
console.log(5 <= 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 == 5);
console.log(5 == 6);
console.log(5 != 6);

console.log(5 == "5");
console.log(5 === "5");

// AND: If one of the input is false, then result is false
console.log(true && false);
// OR: If one of the input is true, then result is true
console.log(true || false);
// NOT: If input is true, then result is false
console.log(!true);

/**
 * Conditional statement (if, else, switch)
 * if (condition) {
 * } elseif(condition){
 * }
 *  else{
 * }
 * if else ladder
 */

const gpa = 0.9;

if (gpa >= 3) {
  console.log("Distinction");
} else if (gpa >= 2) {
  console.log("First division");
} else if (gpa >= 1) {
  console.log("Second division");
} else {
  console.log("Fail");
}

/**
 * switch (value){
 * case compareValue:
 * ...
 * default:
 * }
 */

const day = "monday";

switch (day) {
  case "saturday":
    console.log("Holiday");
    break;

  case "sunday":
    console.log("Holiday");
    break;

  default:
    console.log("Not holiday");
    break;
}
