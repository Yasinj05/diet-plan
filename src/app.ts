import express, { Application } from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import dietPlanRoutes from "./routes/dietPlanRoutes";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/diet-plans", dietPlanRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
