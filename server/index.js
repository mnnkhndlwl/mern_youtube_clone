import express, { application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

dotenv.config();
app.use(cors());
// to connect our application to mongodb
const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}


//middlewares
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos/", videoRoutes);
app.use("/api/comments", commentRoutes);

//error handler - to give error messages so that we don't have to implement catch error for every request
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(3001, () => {
    connect();
    console.log("Connected to Server");
  });