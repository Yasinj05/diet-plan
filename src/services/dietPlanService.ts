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

const deletePlan = async (userId: string, week: number, year: number) => {
  return await DietPlan.findOneAndDelete({ userId, week, year });
};

const getPreviousWeek = (
  week: number,
  year: number
): { week: number; year: number } => {
  if (week === 1) {
    return { week: 52, year: year - 1 };
  }
  return { week: week - 1, year };
};

const getNextWeek = (
  week: number,
  year: number
): { week: number; year: number } => {
  if (week === 52) {
    return { week: 1, year: year + 1 };
  }
  return { week: week + 1, year };
};

export default {
  getWeeklyPlan,
  createPlan,
  updatePlan,
  deletePlan,
  getPreviousWeek,
  getNextWeek,
};
