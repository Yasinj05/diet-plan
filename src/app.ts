import express, { Application } from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import dietPlanRoutes from "./routes/dietPlanRoutes";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();

app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use("/api/diet-plans", dietPlanRoutes);

// // Middleware
// app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
