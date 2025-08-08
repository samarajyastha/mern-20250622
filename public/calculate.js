function square(value) {
  const result = value * value;

  return result;
}

function cube(value) {
  const result = value * value * value;

  return result;
}

export function areaOfCircle(radius) {
  const area = 3.1415 * radius * radius;

  return area;
}

export { cube, square };

export default square;
