import { Request, Response } from "express";
import dietPlanService from "../services/dietPlanService";

export const getDietPlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, week, year } = req.params;

  try {
    const dietPlan = await dietPlanService.getWeeklyPlan(
      userId,
      parseInt(week),
      parseInt(year)
    );
    if (!dietPlan) {
      res.status(404).json({ message: "Diet plan not found" });
      return;
    }
    res.json(dietPlan);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};

export const createDietPlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, week, year, dailyPlans } = req.body;

  try {
    const newDietPlan = await dietPlanService.createPlan({
      userId,
      week,
      year,
      dailyPlans,
    });
    res.status(201).json(newDietPlan);
  } catch (err) {
    const error = err as any;
    res.status(500).json({ message: error.message });
  }
};
