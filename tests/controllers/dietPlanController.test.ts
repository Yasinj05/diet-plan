import request from "supertest";
import app from "../../src/app";
import { connectDB, disconnectDB } from "../../src/config/db";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

describe("DietPlan Controller", () => {
  describe("POST /api/diet-plans", () => {
    it("should create a new diet plan and return 201 status", async () => {
      const newDietPlan = {
        userId: "12345",
        week: 1,
        year: 2024,
        dailyPlans: [
          {
            day: "Monday",
            meals: [
              {
                name: "Oatmeal",
                type: "breakfast",
                calories: 100,
                proteins: 10,
                carbohydrates: 50,
                fats: 5,
              },
              {
                name: "Grilled Chicken Salad",
                type: "lunch",
                calories: 400,
                proteins: 30,
                carbohydrates: 20,
                fats: 15,
              },
            ],
          },
          {
            day: "Tuesday",
            meals: [
              {
                name: "Smoothie",
                type: "breakfast",
                calories: 250,
                proteins: 5,
                carbohydrates: 60,
                fats: 2,
              },
            ],
          },
        ],
      };

      const response = await request(app)
        .post("/api/diet-plans")
        .send(newDietPlan)
        .expect(201);

      expect(response.body).toHaveProperty("_id");
      expect(response.body.userId).toBe(newDietPlan.userId);
      expect(response.body.week).toBe(newDietPlan.week);
      expect(response.body.year).toBe(newDietPlan.year);
      expect(response.body.dailyPlans.length).toBe(
        newDietPlan.dailyPlans.length
      );
    });

    it("should return 400 status when required fields are missing", async () => {
      const invalidDietPlan = {
        week: 1,
        year: 2024,
        dailyPlans: [
          {
            day: "Monday",
            meals: [
              {
                name: "Oatmeal",
                type: "breakfast",
                calories: 100,
                proteins: 10,
                carbohydrates: 50,
                fats: 5,
              },
            ],
          },
        ],
      };

      await request(app)
        .post("/api/diet-plans")
        .send(invalidDietPlan)
        .expect(400);
    });
  });
});

describe("GET /api/diet-plans/:userId/week/:week/year/:year", () => {
  it("should return the diet plan for the specified user, week, and year", async () => {
    const userId = "12345";
    const week = 1;
    const year = 2024;

    const response = await request(app)
      .get(`/api/diet-plans/${userId}/week/${week}/year/${year}`)
      .expect(200);

    expect(response.body).toHaveProperty("_id");
    expect(response.body.userId).toBe(userId);
    expect(response.body.week).toBe(week);
    expect(response.body.year).toBe(year);
  });

  it("should return 404 status when diet plan is not found", async () => {
    const userId = "nonexistentUserId";
    const week = 1;
    const year = 2024;

    await request(app)
      .get(`/api/diet-plans/${userId}/week/${week}/year/${year}`)
      .expect(404);
  });
});
