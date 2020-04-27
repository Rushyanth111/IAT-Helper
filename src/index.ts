import { authenticateUser } from "./DatabaseWorker";
import bodyparser from "body-parser";
import express from "express";

const port: number = 10000;

const app = express();

app.use(bodyparser.json());

app.post("/auth", authenticateUser);

const server = app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

process.on("SIGINT", () => {
  server.close();
  console.log("Server is not listening anymore.");
});
