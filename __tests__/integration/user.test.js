const request = require("supertest");
const app = require("../../src/app.js");
const connection = require("../../src/Database/connection.js");
const User = require("../../src/Models/User.js");

describe("Test the app routes", () => {
  test("should execute the root route", async () => {
    const res = await request(app).get("/api/");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });

  test("should return status code 200", async () => {
    const res = await request(app).get("/api/users");

    expect(res.status).toEqual(200);
  });

  test("should create a new user", async () => {
    const user = await User.query().insert({
      name: "Jane Doe",
      email: "jane@doe.com",
    });

    expect(user.name).toBe("Jane Doe");
  });

  test("should update an user", async () => {
    const user = await User.query().where("id", 1).update({
      name: "Jane Doe",
      email: "jane@doe.com",
    });

    expect(user).toBe(1);
  });

  test("should delete an user", async () => {
    const user = await User.query().where("id", 1).del();

    expect(user).toBe(1);
  });
});

afterAll(async (done) => {
  connection.destroy();
  done();
});
