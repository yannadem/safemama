import app from "../index"

import request from "supertest";

//POST

describe("POST /", () => {

  it("returns status code 201 if no field is empty", async ()=> {
    const res = await request (app)
      .post("/")
      .send({ name: "alcohol", safety: "safe", category: "food", notes: "vodka", source: "url for vodka" })

    expect(res.statusCode).toEqual(201);

    });
});

