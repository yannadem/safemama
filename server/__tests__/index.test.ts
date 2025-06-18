import app from "../index"
import request, {Response} from "supertest";
import mongoose from "mongoose";

const PRODUCTS_ENDPOINT = "/products";

interface ProductPayload {
  name: string,
  safety: "safe" | "unsafe" | "caution",
  category: string,
  notes: string,
  source: string
}

const product : ProductPayload = {
  name: "nicotine",
  safety: "unsafe",
  category: "Medications",
  notes: "tobacco products and e-cigarettes",
  source: "https://nida.nih.gov/publications/research-reports/substance-use-in-women/substance-use-while-pregnant-breastfeeding"
}

describe("POST /", () => {

  it("returns status code 201 if all required field are filled", async ()=> {
    const res : Response = await request(app)
      .post(PRODUCTS_ENDPOINT)
      .send(product)

    expect(res.statusCode).toEqual(201);

    });

    it("return 400 status code if any of the required fields is empty", async() => {
      const res = await request(app)
        .post(PRODUCTS_ENDPOINT)
        .send({ name: "nicotine", safety: "", category: "Medications", notes: "tobacco products and e-cigarettes", source: "https://nida.nih.gov/publications/research-reports/substance-use-in-women/substance-use-while-pregnant-breastfeeding" })

    expect(res.statusCode).toEqual(400);
    })
});


describe('GET /', () => {
  it("returns 200 if the database is loaded", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  })
 })

 // Close the MongoDB connection after all tests finished
afterAll(async () => {
  await mongoose.connection.close();
});
