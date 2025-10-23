import { describe, it, expect, beforeAll } from "vitest";
import pool from "../src/db.js";
import { createProduct } from "../src/createProduct.js";
import { getProducts } from "../src/getProducts.js";

beforeAll(async () => {
  await pool.query("CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY, name TEXT, price NUMERIC)");
  await pool.query("TRUNCATE TABLE products RESTART IDENTITY;");
});

describe("Pruebas de integración con PostgreSQL", () => {
  it("Crea un producto en la base de datos", async () => {
    const product = await createProduct("Laptop", 1200);
    expect(product.name).toBe("Laptop");
  });

  it("Obtiene los productos creados", async () => {
    const products = await getProducts();
    expect(products.length).toBeGreaterThan(0);
  });

  it("Verifica que el precio sea numérico", async () => {
    const products = await getProducts();
    expect(typeof Number(products[0].price)).toBe("number");
  });
});
