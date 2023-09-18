import { server } from "./server.js";

const port = 65535;
server.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
