import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());


const SECRET = process.env.JWT_SECRET || "dev-jwt-secret-change-me";
const users = [];

// Регистрация
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });
  res.json({ status: "ok" });
});

// Логин
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: "User not found" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ status: "ok", token });
});

// Защищённый маршрут
app.get("/profile", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });

  const token = authHeader.split(" ")[1]; // Bearer TOKEN
  try {
    const data = jwt.verify(token, SECRET);
    res.json({ status: "ok", user: data });
  } catch (e) {
    res.status(401).json({ error: "Invalid token" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
