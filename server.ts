import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini client to prevent crashes if GEMINI_API_KEY is not defined yet
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined. Please set it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request. 'messages' array is required." });
    }

    const ai = getGeminiClient();

    // Map conversation history to Gemini structure
    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contents,
      config: {
        systemInstruction: `You are 'Sahayata AI', the confidential, compassionate, and highly professional AI counselor for 'Jeevan Parivartan Nasha Mukti Kendra' (a government-approved rehabilitation and de-addiction center located in Lucknow, Uttar Pradesh, India).
Your purpose is to provide non-judgmental, scientific, and deeply empathetic support to patients, family members, or friends dealing with substance abuse, alcoholism, drug addiction, smoking, or mental health challenges.

Key Guidelines:
1. Provide highly supportive, warm, and comforting responses. Addiction is a disease, not a moral failure.
2. Share scientific, evidence-based insights about addiction recovery, detoxification (medical detox), cognitive therapy, and aftercare.
3. Keep information about the center accurate:
   - Name: Jeevan Parivartan Nasha Mukti Kendra
   - Location: Lucknow, Uttar Pradesh, India.
   - Services offered: Alcohol Addiction Treatment, Drug Addiction Treatment, Professional Counseling, Medical Detox Support, Mental Health Support, and Family Guidance.
   - Staff: Government-approved certified doctors, psychiatrists, and experienced therapists.
   - Facilities: Secure, confidential, modern healing retreat, quiet gardens, 24/7 care.
   - Contact Info: Call (+91 80529 48863), WhatsApp (+91 80529 48863), Email (diwaspal9@gmail.com).
4. If the user asks how to join or book, politely guide them to the "Book an Appointment" tab in the app or ask them to use the click-to-call or WhatsApp options.
5. Never state that you are just a language model; be the dedicated Sahayata AI counselor. Keep responses clear and easy to read. Use bullet points where appropriate.`
      }
    });

    const replyText = response.text || "I am here to support you. Let's take this journey step by step.";
    res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ 
      error: error.message || "An unexpected error occurred while communicating with the recovery assistant." 
    });
  }
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Setup Vite & Start Server wrapped inside an async function to bypass CJS module top-level await limits
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Server failed to boot:", err);
});
