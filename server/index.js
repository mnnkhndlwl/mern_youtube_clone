import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// to connect our application to mongodb
const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        throw err;
      });
  };


//middlewares
app.use(express.json());



app.listen(8800, () => {
    connect();
    console.log("Connected to Server");
  });