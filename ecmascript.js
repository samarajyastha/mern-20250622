/**
 * 1. Template literals
 * 2. Destructuring
 * 3. Spread operator
 * 4. Array methods & for/of
 * 5. Arrow function
 */

const name = "Ram";
const age = 20;
const address = "Dharan";

// Hello my name is <name> and I am <age> years old. I live in <address>
const result =
  "Hello my name is " +
  name +
  " and I am " +
  age +
  " years old. I live in " +
  address;

console.log(result);

// Template literals: ``
const result2 = `Hello my name is ${name} and I am ${age} years old. I live in ${address}.`;

console.log(result2);

// 1. Object destructuring
const course = {
  title: "MERN stack",
  duration: "3 months",
  price: 2500,
};

// const courseTitle = course.title;

const { duration, price, title: courseTitle } = course;

console.log(courseTitle);
console.log(duration);
console.log(price);

// 2. Array destructuring
const data = ["Itahari", 8976543210, "Grade A"];

// React useState
const [myAddress, myNumber, myValue] = data;

console.log(myAddress);
console.log(myNumber);
console.log(myValue);

// Spread operator (...)
// To copy data

const profile = {
  name: "Ram",
  age: 20,
  address: "Itahari",
};

const user = {
  email: "ram@gmail.com",
  password: 123456,
};

const userData = {
  ...profile,
  ...user,
};

console.log(userData);

const list1 = [34, 54567, 47, 5865, 8, 23];
const list2 = [1468, 463, 316868, 168, 4, 314, 681, 68, 4856];

console.log([...list1, ...list2]);

const myObject = {
  name: "Ram",
  age: 20,
  address: "Itahari",
  title: "MERN stack",
  duration: "3 months",
  price: 2500,
};

// combine destructuring and spread operator

const { name: myName, address: addr, price: myPrice, ...restObject } = myObject;
console.log(restObject);

// Arrow function
// function hello(name) {
//   console.log("hello" + name);
// }

const hello = (name) => {
  console.log("hello " + name);
};

hello("ram");
hello("hari");

function sum(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

console.log(add(5, 16));

// Anonymous function
// function () {}

() => {}; // anonymous arrow function

console.log("For loop ======================================================");

// Array methods: iterable
const dataList = [1468, 463, 316868, 168, 41, 314, 681, 68, 4856];

for (let i = 0; i < dataList.length; i++) {
  console.log(dataList[i]);
}
console.log(
  "For of loop ======================================================"
);

// for of loop
for (const myData of dataList) {
  console.log(myData);
}
console.log(
  "For each loop ======================================================"
);

const squaredList = [];

dataList.forEach((myData) => {
  const square = myData * myData;
  squaredList.push(square);
});

console.log(squaredList);

console.log("Map ======================================================");
// Map: [x,y,z] => [a,b,c]

const mapSquareList = dataList.map((myData) => myData * myData);

console.log(mapSquareList);

console.log("Filter ======================================================");
// Filter: [a,a,b,b,a,b,b,a] => [a,a,a,a]

const filteredList = dataList.filter((myData) => myData % 2 == 0);
console.log(filteredList);

console.log("Sorting ======================================================");
// a-b: ASC
// b-a: DESC
dataList.sort((a, b) => b - a);

console.log(dataList);

console.log("Find ======================================================");

const foundData = dataList.find((myData) => myData > 500);

console.log(foundData);

// includes, some, every => boolean
const everyResult = dataList.every((myData) => myData > 500);
const someResult = dataList.some((myData) => myData > 500);
const includesResult = dataList.includes(167);

console.log(everyResult);
console.log(someResult);
console.log(includesResult);

console.log(Math.random())
