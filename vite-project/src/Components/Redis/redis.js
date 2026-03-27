import express from "express";
import cors from "cors";
import { createClient } from "redis";

const PORT = 5001;
const app = express();
app.use(cors());
app.use(express.json());

const redis = createClient({ url: "redis://127.0.0.1:6379" });
redis.on("error", err => console.log("Redis Client Error", err));
await redis.connect();

// Получить значение
app.get("/api/value", async (req, res) => {
  const value = await redis.get("value") || "Ничего не найдено";
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

app.listen(PORT, () => console.log(`Redis server running on http://localhost:${PORT}`));
