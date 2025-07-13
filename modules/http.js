import http from "http";

const app = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);

  if (request.method == "POST") {
    response.writeHead(201, { "content-type": "text/html" });
    response.end("<h1>Data added successfully.</h1>");

    return;
  } else if (request.method == "GET") {
    if (request.url === "/") {
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>Home page</h1>");
    } else if (request.url === "/about") {
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>About page</h1>");
    } else {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Page not found.</h1>");
    }
  } else {
    response.writeHead(405, { "content-type": "text/html" });
    response.end("<h1>Method not allowed.</h1>");
  }
});

app.listen(5000, () => {
  console.log("Server running at port 5000...");
});
