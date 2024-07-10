import { Request, Response } from "express";
import dietPlanService from "../services/dietPlanService";

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

