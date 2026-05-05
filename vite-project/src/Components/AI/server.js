import express from 'express';
import cors from 'cors';
import OpenAI from "openai";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

app.post("/api/chat", async (req, res) => {
    const { message, model } = req.body;
    
    try {
        const response = await client.chat.completions.create({
            model: model,
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        res.json({
            answer: response.choices[0].message.content,
        });
    } catch (e) {
        console.log(e);
    }
});

app.listen(5000, () => {
    console.log("server started port: 5000")
})