const codeitUrl =
  "https://www.codeit.com.np/cousers/search-course?q=MERN+Stack&duration=3+months";

const urlObject = new URL(codeitUrl);

console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);
console.log(urlObject.searchParams);

const params = new URLSearchParams(urlObject.search);

console.log(params);

params.set("duration", "5 months");

console.log(params);

params.append("year", 2025);

console.log(params);
