import express from "express";
import cors from "cors";
import { createClient } from "redis";

const app = express();
app.use(cors());
app.use(express.json());

const redis = createClient({ url: "redis://127.0.0.1:6379" });
redis.on("error", err => console.log("Redis Client Error", err));
await redis.connect();

// Получить значение
app.get("/api/value", async (req, res) => {
  const value = await redis.get("value") || "Пусто";
  res.json({ value });
});

// Установить значение
app.post("/api/value", async (req, res) => {
  const { value } = req.body;
  await redis.set("value", value);
  res.json({ status: "OK", value });
});

app.delete("/api/value", async (req, res) => {
  await redis.del("value");
  res.json({ status: "OK", message:"Успешно удаленно"});
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));