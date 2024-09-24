import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import path from "node:path";
import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const port = 3001;

    app.use((req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      app.use(cors());
    });
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server is running on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
