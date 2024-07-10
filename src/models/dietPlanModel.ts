import mongoose, { Schema, Document } from "mongoose";

// Define interfaces
interface IMeal extends Document {
  name: string;
  type: "breakfast" | "lunch" | "dinner" | "snack";
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
}

interface IDayPlan extends Document {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  meals: IMeal[];
}

interface IDietPlan extends Document {
  userId: string;
  week: number;
  year: number;
  dailyPlans: IDayPlan[];
}

// Define Meal Schema
const MealSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "snack"],
    required: true,
  },
  calories: { type: Number, required: true },
  proteins: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  fats: { type: Number, required: true },
});

// Define DayPlan Schema
const DayPlanSchema: Schema = new Schema({
  day: {
    type: String,
    enum: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    required: true,
  },
  meals: [MealSchema],
});

// Define DietPlan Schema
const DietPlanSchema: Schema = new Schema({
  userId: { type: String, required: true },
  week: { type: Number, required: true },
  year: { type: Number, required: true },
  dailyPlans: [DayPlanSchema],
});

// Create and export the model
const DietPlan = mongoose.model<IDietPlan>("DietPlan", DietPlanSchema);
export default DietPlan;
