import { Router } from "express";
import {
  createDietPlan,
  getDietPlan,
  updateDietPlan,
} from "../controllers/dietPlanController";

const router: Router = Router();

router.get("/:userId/week/:week/year/:year", getDietPlan);
router.post("/", createDietPlan);
router.put("/:userId/week/:week/year/:year", updateDietPlan);

export default router;
