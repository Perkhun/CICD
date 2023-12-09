const request = require("supertest");
const express = require("express");
const app = require("../index"); // Імпортуємо налаштований сервер

test("POST /products додає новий продукт", async () => {
  const response = await request(app)
    .post("/products")
    .send({ name: "Тестовий продукт", price: 10 });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty("message", "Product added successfully.");
  expect(response.body).toHaveProperty("productId");
});
