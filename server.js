const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hello Mohan");
});

server.listen(5000, () => {
  console.log("Server running at port 5000...");
});
