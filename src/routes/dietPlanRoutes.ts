import { Router } from "express";
import { createDietPlan } from "../controllers/dietPlanController";

const router: Router = Router();

router.post("/", createDietPlan);

export default router;
