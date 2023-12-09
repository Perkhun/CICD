const request = require("supertest");
const express = require("express");
const app = require("../index");

test("POST /products додає новий продукт", async () => {
  const response = await request(app)
    .post("/products")
    .send({ name: "Тестовий продукт", price: 10 });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty("message", "Product added successfully.");
  expect(response.body).toHaveProperty("productId");
});

// Закриваємо сервер, коли тести виконані
afterAll(() => {
  app.close();  // Можливо, вам потрібно використовувати іменно app.close, в залежності від вашої конфігурації
});
