const request = require("supertest");
const server = require("../index");

test("POST /products додає новий продукт", async () => {
  const response = await request(server)
    .post("/products")
    .send({ name: "Тестовий продукт", price: 10 });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty("message", "Product added successfully.");
  expect(response.body).toHaveProperty("productId");
});

// Закриття сервера після тестів
afterAll((done) => {
  server.close(() => {
    done();
  });
});
