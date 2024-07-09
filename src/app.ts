import express, { Application } from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
