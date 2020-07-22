import "reflect-metadata";
import { createConnection } from "typeorm";
import server from "./server";
import { User } from "./entity/User";

createConnection()
  .then(async (connection) => {
    // insert new users for test
    // await connection.manager.save(
    //   connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27,
    //   })
    // );
    // await connection.manager.save(
    //   connection.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24,
    //   })
    // );

    const PORT = parseInt(process.env.PORT) || 5000;
    server.listen(PORT, () => {
      console.log(`Listening on port : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
