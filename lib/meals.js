import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((reslove) => setTimeout(reslove, 200));
  return db.prepare("SELECT * FROM meals").all();
}
