import { Router } from "express";
import {
  createDietPlan,
  deleteDietPlan,
  getDietPlan,
  getPreviousWeekDietPlan,
  updateDietPlan,
} from "../controllers/dietPlanController";

const router: Router = Router();

router.get("/:userId/week/:week/year/:year", getDietPlan);
router.post("/", createDietPlan);
router.put("/:userId/week/:week/year/:year", updateDietPlan);
router.delete("/:userId/week/:week/year/:year", deleteDietPlan);
router.get("/:userId/week/:week/year/:year/previous", getPreviousWeekDietPlan);

export default router;
