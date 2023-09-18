import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.end("Hello, Roland!");
  } else {
    response.statusCode = 404;
    response.end("Page not found");
  }
});
