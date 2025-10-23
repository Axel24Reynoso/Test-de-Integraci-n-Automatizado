import pool from './db.js';

export async function getProducts() {
  const res = await pool.query('SELECT * FROM products');
  return res.rows;
}
