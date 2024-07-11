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
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           type:
 *                             type: string
 *                           calories:
 *                             type: number
 *                           proteins:
 *                             type: number
 *                           carbohydrates:
 *                             type: number
 *                           fats:
 *                             type: number
 *           examples:
 *             dietPlan:
 *               value:
 *                 userId: "12345"
 *                 week: 1
 *                 year: 2024
 *                 dailyPlans:
 *                   - day: "Monday"
 *                     meals:
 *                       - name: "Oatmeal"
 *                         type: "breakfast"
 *                         calories: 100
 *                         proteins: 10
 *                         carbohydrates: 50
 *                         fats: 5
 *                       - name: "Grilled Chicken Salad"
 *                         type: "lunch"
 *                         calories: 400
 *                         proteins: 30
 *                         carbohydrates: 20
 *                         fats: 15
 *                   - day: "Tuesday"
 *                     meals:
 *                       - name: "Smoothie"
 *                         type: "breakfast"
 *                         calories: 250
 *                         proteins: 5
 *                         carbohydrates: 60
 *                         fats: 2
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
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                             type:
 *                               type: string
 *                             calories:
 *                               type: number
 *                             proteins:
 *                               type: number
 *                             carbohydrates:
 *                               type: number
 *                             fats:
 *                               type: number
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
 *         example: 12345
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The week number
 *         example: 1
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The year
 *         example: 2024
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
 *         example: "12345"
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The week number
 *         example: 2
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The year
 *         example: 2024
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
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           type:
 *                             type: string
 *                           calories:
 *                             type: number
 *                           proteins:
 *                             type: number
 *                           carbohydrates:
 *                             type: number
 *                           fats:
 *                             type: number
 *           examples:
 *             updateDietPlan:
 *               value:
 *                 dailyPlans:
 *                   - day: "Monday"
 *                     meals:
 *                       - name: "Oatmeal"
 *                         type: "breakfast"
 *                         calories: 320
 *                         proteins: 12
 *                         carbohydrates: 55
 *                         fats: 6
 *                       - name: "Grilled Chicken Salad"
 *                         type: "lunch"
 *                         calories: 420
 *                         proteins: 32
 *                         carbohydrates: 22
 *                         fats: 17
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
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                             type:
 *                               type: string
 *                             calories:
 *                               type: number
 *                             proteins:
 *                               type: number
 *                             carbohydrates:
 *                               type: number
 *                             fats:
 *                               type: number
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
 *         example: 12345
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The week number
 *         example: 1
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The year
 *         example: 2024
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
 *         example: 12345
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current week number
 *         example: 1
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current year
 *         example: 2024
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
 *         example: 12345
 *       - in: path
 *         name: week
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current week number
 *         example: 1
 *       - in: path
 *         name: year
 *         schema:
 *           type: integer
 *         required: true
 *         description: The current year
 *         example: 2024
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
