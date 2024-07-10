import DietPlan from "../models/dietPlanModel";

const createPlan = async (planData: any) => {
  const dietPlan = new DietPlan(planData);
  return await dietPlan.save();
};

export default {
  createPlan,
};
