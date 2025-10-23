import pool from './db.js';

export async function createProduct(name, price) {
  const res = await pool.query(
    'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  return res.rows[0];
}
