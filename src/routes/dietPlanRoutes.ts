import { Router } from "express";
import {
  getDietPlan,
  createDietPlan,
  updateDietPlan,
  deleteDietPlan,
  getPreviousWeekDietPlan,
  getNextWeekDietPlan,
} from "../controllers/dietPlanController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Diet Plans
 *   description: API for managing diet plans
 */

/**
 * @swagger
 * /api/diet-plans:
 *   post:
 *     summary: Create a new diet plan
 *     tags: [Diet Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               week:
 *                 type: integer
 *               year:
 *                 type: integer
 *               dailyPlans:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     day:
 *                       type: string
 *                     meals:
 *                       type: array
 *                       items:
 *                         type: string
 *     responses:
 *       201:
 *         description: The created diet plan.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 week:
 *                   type: integer
 *                 year:
 *                   type: integer
 *                 dailyPlans:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: string
 *                       meals:
 *                         type: array
 *                         items:
 *                           type: string
 */
router.post("/", createDietPlan);

/**
 * @swagger
 * /api/diet-plans/{userId}/week/{week}/year/{year}:
 *   get:
 *     summary: Get a diet plan by userId, week, and year
 *     tags: [Diet Plans]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The week number
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The year
 *     responses:
 *       200:
 *         description: The diet plan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 week:
 *                   type: integer
 *                 year:
 *                   type: integer
 *                 dailyPlans:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: string
 *                       meals:
 *                         type: array
 *                         items:
 *                           type: string
 */
router.get("/:userId/week/:week/year/:year", getDietPlan);

/**
 * @swagger
 * /api/diet-plans/{userId}/week/{week}/year/{year}:
 *   put:
 *     summary: Update a diet plan by userId, week, and year
 *     tags: [Diet Plans]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The week number
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The year
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dailyPlans:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     day:
 *                       type: string
 *                     meals:
 *                       type: array
 *                       items:
 *                         type: string
 *     responses:
 *       200:
 *         description: The updated diet plan.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 week:
 *                   type: integer
 *                 year:
 *                   type: integer
 *                 dailyPlans:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: string
 *                       meals:
 *                         type: array
 *                         items:
 *                           type: string
 */
router.put("/:userId/week/:week/year/:year", updateDietPlan);

/**
 * @swagger
 * /api/diet-plans/{userId}/week/{week}/year/{year}:
 *   delete:
 *     summary: Delete a diet plan by userId, week, and year
 *     tags: [Diet Plans]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The week number
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The year
 *     responses:
 *       200:
 *         description: The deleted diet plan.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.delete("/:userId/week/:week/year/:year", deleteDietPlan);

/**
 * @swagger
 * /api/diet-plans/{userId}/week/{week}/year/{year}/previous:
 *   get:
 *     summary: Get the previous week's diet plan by userId, week, and year
 *     tags: [Diet Plans]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current week number
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current year
 *     responses:
 *       200:
 *         description: The previous week's diet plan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 week:
 *                   type: integer
 *                 year:
 *                   type: integer
 *                 dailyPlans:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: string
 *                       meals:
 *                         type: array
 *                         items:
 *                           type: string
 */
router.get("/:userId/week/:week/year/:year/previous", getPreviousWeekDietPlan);

/**
 * @swagger
 * /api/diet-plans/{userId}/week/{week}/year/{year}/next:
 *   get:
 *     summary: Get the next week's diet plan by userId, week, and year
 *     tags: [Diet Plans]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current week number
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current year
 *     responses:
 *       200:
 *         description: The next week's diet plan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 week:
 *                   type: integer
 *                 year:
 *                   type: integer
 *                 dailyPlans:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       day:
 *                         type: string
 *                       meals:
 *                         type: array
 *                         items:
 *                           type: string
 */
router.get("/:userId/week/:week/year/:year/next", getNextWeekDietPlan);

export default router;
