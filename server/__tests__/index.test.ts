import app from "../index"

import request from "supertest";

//POST

describe("POST /", () => {

  it("returns status code 201 if no field is empty", async ()=> {
    const res = await request(app)
      .post("/")
      .send({ name: "alcohol", safety: "safe", category: "food", notes: "vodka", source: "url for vodka" })

    expect(res.statusCode).toEqual(201);

    });

    it("return 400 status code if any of the required fields ins empty", async() => {
      const res = await request(app)
        .post("/")
        .send({ name: "alcohol", safety: "", category: "food", notes: "vodka", source: "url for vodka" })

    expect(res.statusCode).toEqual(400);
    })
});

describe('get /', async () => {
  it("returns 200 if the database is loaded", async () => {
    const res = await (request(app))
    .get("/")
    .send({})
  })
 })

