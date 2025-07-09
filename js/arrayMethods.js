const data = [3, 45, 356, 42, 55, 524, 134, 346, 486, 233, 234, 242, 23, 123];
console.log(data);

// Map: [x,y,z] => [a,b,c]
const mapResult = data.map((value) => value + 10);

console.log("MAP =================");
console.log(mapResult);

// Filter: [a,b,b,a,a,b,b,a,a,b] => [a,a,a,a,a]
const filterResult = data.filter((value) => value > 200);
console.log("FILTER =================");
console.log(filterResult);

// Find: [a,b,c,d,e] => a

const users = [
  {
    name: "Ram",
    age: 20,
  },
  {
    name: "Hari",
    age: 89,
  },
  {
    name: "Shyam",
    age: 23,
  },
  {
    name: "Sita",
    age: 45,
  },
];

const findValue = data.find((value) => value == 233);
console.log(findValue);
const findUser = users.find((value) => value.name == "Sita");
console.log(findUser);

// Includes, Some, Every: []=> boolean
const includesResult = data.includes(486);
const someResult = data.some((value) => value > 100);
const everyResult = data.every((value) => value > 100);

console.log({ includesResult, someResult, everyResult });
