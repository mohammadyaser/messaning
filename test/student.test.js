const request = require("supertest");
const app = require("../app");

describe("test the APIs", () => {
  test("post", async () => {
    const response = await request(app)
      .post("/api//")
      .send({
        title: "test item",
      }).set("Accept", "application/json");
    let result = response.body;
    expect(response.statusCode).toBe(201);
  });
});
