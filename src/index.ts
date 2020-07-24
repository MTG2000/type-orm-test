import "reflect-metadata";
import { createConnection } from "typeorm";
import server from "./server";
import "./chat";

createConnection()
  .then(async (connection) => {
    const PORT = parseInt(process.env.PORT) || 5000;
    server.listen(PORT, () => {
      console.log(`Listening on port : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
