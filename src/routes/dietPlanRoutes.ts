import { Router } from "express";
import { createDietPlan, getDietPlan } from "../controllers/dietPlanController";

const router: Router = Router();

router.get("/:userId/week/:week/year/:year", getDietPlan);
router.post("/", createDietPlan);

export default router;
