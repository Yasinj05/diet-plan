import request from "supertest";
import mongoose from "mongoose";
import server from "../../src/app";
import connectDB from "../../src/config/db";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.disconnect();
  server.close();
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

      const response = await request(server)
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

      await request(server)
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

    const response = await request(server)
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

    await request(server)
      .get(`/api/diet-plans/${userId}/week/${week}/year/${year}`)
      .expect(404);
  });
});

describe("PUT /api/diet-plans/:userId/week/:week/year/:year", () => {
  it("should update the diet plan and return 200 status", async () => {
    const userId = "12345";
    const week = 1;
    const year = 2024;
    const updatedPlan = {
      dailyPlans: [
        {
          day: "Monday",
          meals: [
            {
              name: "Updated Oatmeal",
              type: "breakfast",
              calories: 320,
              proteins: 12,
              carbohydrates: 55,
              fats: 6,
            },
          ],
        },
      ],
    };

    const response = await request(server)
      .put(`/api/diet-plans/${userId}/week/${week}/year/${year}`)
      .send(updatedPlan)
      .expect(200);

    expect(response.body).toHaveProperty("_id");
    expect(response.body.dailyPlans[0].meals[0].name).toBe("Updated Oatmeal");
  });

  it("should return 404 status when diet plan to update is not found", async () => {
    const userId = "nonexistentUserId";
    const week = 1;
    const year = 2024;
    const updatedPlan = {
      dailyPlans: [
        {
          day: "Monday",
          meals: [
            {
              name: "Updated Oatmeal",
              type: "breakfast",
              calories: 320,
              proteins: 12,
              carbohydrates: 55,
              fats: 6,
            },
          ],
        },
      ],
    };

    await request(server)
      .put(`/api/diet-plans/${userId}/week/${week}/year/${year}`)
      .send(updatedPlan)
      .expect(404);
  });
});

describe("DELETE /api/diet-plans/:userId/week/:week/year/:year", () => {
  it("should delete the diet plan and return 200 status", async () => {
    const userId = "12345";
    const week = 1;
    const year = 2024;

    await request(server)
      .delete(`/api/diet-plans/${userId}/week/${week}/year/${year}`)
      .expect(200);
  });

  it("should return 404 status when diet plan to delete is not found", async () => {
    const userId = "nonexistentUserId";
    const week = 1;
    const year = 2024;

    await request(server)
      .delete(`/api/diet-plans/${userId}/week/${week}/year/${year}`)
      .expect(404);
  });
});
