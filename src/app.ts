import express, { Application } from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import dietPlanRoutes from "./routes/dietPlanRoutes";
import { setupSwagger } from "./config/swagger";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/diet-plans", dietPlanRoutes);

// Swagger setup
setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
