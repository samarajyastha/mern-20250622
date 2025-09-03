import squareFunction, {
  cube as cubeFunction,
  areaOfCircle,
} from "./calculate.js";

const number = 80;

const squaredNumber = squareFunction(number);
const cubedNumber = cubeFunction(number);
const area = areaOfCircle(number);

console.log(squaredNumber);
console.log(cubedNumber);
console.log(area);
