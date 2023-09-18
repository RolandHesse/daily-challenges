import { server } from "./server.js";

server.listen(9003, () =>
  console.log("Server running at http://localhost:9003")
);
