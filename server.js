import express from "express";
import morgan from "morgan";
import { connect } from "./src/postgres/postgres.connect.js";
import dotenv from "dotenv";
import router from "./src/routes/user.routes.js";
import { appDataSource } from "./src/config/data.source.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("combined"));
await connect();
const PORT = process.env.PORT || 5000;
app.use("/api/user", router);

// app.use()
app.listen(PORT, async () => {
  await appDataSource
    .initialize()
    .then(() => {
      console.log("Connection initialized with database...");
    })
    .catch((error) => console.log({ messageCatch: error }));
  console.log(`Server is running to port ${PORT}`);
});
