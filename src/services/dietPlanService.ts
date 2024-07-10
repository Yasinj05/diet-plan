import DietPlan from "../models/dietPlanModel";

const getWeeklyPlan = async (userId: string, week: number, year: number) => {
  return await DietPlan.findOne({ userId, week, year });
};

const createPlan = async (planData: any) => {
  const dietPlan = new DietPlan(planData);
  return await dietPlan.save();
};

export default {
  getWeeklyPlan,
  createPlan,
};
