import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import http from "node:http";
import path from "node:path";
import { Server } from "socket.io";
import { router } from "./router";

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const port = 3001;

    app.use(cors());
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      next();
    });
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    console.log("Connected to MongoDB");
    server.listen(port, () => {
      console.log("Server is running on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
