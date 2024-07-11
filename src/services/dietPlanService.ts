import DietPlan from "../models/dietPlanModel";

const getWeeklyPlan = async (userId: string, week: number, year: number) => {
  return await DietPlan.findOne({ userId, week, year });
};

const createPlan = async (planData: any) => {
  const dietPlan = new DietPlan(planData);
  return await dietPlan.save();
};

const updatePlan = async (
  userId: string,
  week: number,
  year: number,
  updatedPlan: any
) => {
  return await DietPlan.findOneAndUpdate({ userId, week, year }, updatedPlan, {
    new: true,
  });
};

export default {
  getWeeklyPlan,
  createPlan,
  updatePlan,
};
