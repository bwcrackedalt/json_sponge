const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "2mb" }));
app.use(express.static(path.join(__dirname, "public")));

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

const FISH_API_KEY = process.env.FISH_API_KEY;
const FISH_MODEL = process.env.FISH_MODEL || "s2.1-pro-free";

// --------------------------------------------------
// HELPERS
// --------------------------------------------------

function sendError(res, status, message) {
    return res.status(status).json({
        success: false,
        error: message
    });
}

async function readGroq(prompt, systemPrompt) {
    if (!GROQ_API_KEY) {
        throw new Error("GROQ_API_KEY is not configured.");
    }

    const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 6000
            })
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error?.message || "Groq API request failed."
        );
    }

    return data.choices?.[0]?.message?.content || "";
}

function extractJSON(text) {
    let cleaned = text.trim();

    cleaned = cleaned
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/, "");

    const first = cleaned.indexOf("[");
    const last = cleaned.lastIndexOf("]");

    if (first === -1 || last === -1) {
        throw new Error("AI did not return a valid episode array.");
    }

    return JSON.parse(cleaned.slice(first, last + 1));
}

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        server: "Episode Generator",
        groq: Boolean(GROQ_API_KEY),
        fishAudio: Boolean(FISH_API_KEY)
    });
});

// --------------------------------------------------
// AI EPISODE GENERATOR
// --------------------------------------------------

app.post("/api/ai", async (req, res) => {
    try {
        const prompt = String(req.body.prompt || "").trim();

        if (!prompt) {
            return sendError(res, 400, "Missing episode prompt.");
        }

        if (prompt.length > 5000) {
            return sendError(res, 400, "Prompt is too long.");
        }

        const systemPrompt = `
You are an episode generator for a Three.js 3D world.

Generate ONLY a valid JSON array. Do not use Markdown.
Characetrs:
Perch: A news fish reporter.
Those voices for fish audio: 
Perch: 89ad149cdb9b432ead021c5bc60236c9
Supported commands:

1. Create a character:

{
  "createCharacter": {
    "name": "Bob",
    "glb": "./characters/bob.glb",
    "imgurl": "./skins/bob.png",
    "position": [0, 0, 0],
    "fishaudio": "VOICE_ID",
    "prompt": "Character personality",
    "wanders": true,
    "wanderRadius": 15,
    "wanderSpeed": 2
  }
}
2. Create multiple NPCs:

{
  "createNPCS": 5,
  "randomSkins": ["./skins/a.png", "./skins/b.png"],
  "randomGLBs": ["./characters/a.glb", "./characters/b.glb"],
  "rangePos": 30,
  "wanders": true,
  "wanderRadius": 10,
  "wanderSpeed": 2
}

3. Create traffic:

{
  "createTraffic": {
    "cars": ["./cars/car1.glb", "./cars/car2.glb"],
    "speed": 12,
    "count": 5
  }
}

4. Dialogue:

{
  "target": "Bob",
  "text": "Hello!"
}

5. Load a map:

{
  "map": "./maps/city.glb"
}

Rules:
- Create characters before their dialogue.
- Dialogue targets must match character names.
- Use only the supported command formats.
- Keep the episode suitable for a general audience.
- Traffic and character interactions are fictional game events.
- Do not invent API keys or Fish Audio voice IDs.
- Use placeholder voice IDs when none are supplied.
- Output valid JSON only.
Expected ',' or ']' after array element in JSON at position 1541
`;

        const output = await readGroq(prompt, systemPrompt);
        const episode = extractJSON(output);

        if (!Array.isArray(episode)) {
            throw new Error("Generated episode is not an array.");
        }

        res.json({
            success: true,
            episode
        });

    } catch (error) {
        console.error("AI episode error:", error);
        sendError(res, 500, error.message);
    }
});

// --------------------------------------------------
// CHARACTER AI DIALOGUE
// --------------------------------------------------

app.post("/api/character-ai", async (req, res) => {
    try {
        const {
            prompt,
            message,
            name
        } = req.body;

        if (!message || typeof message !== "string") {
            return sendError(res, 400, "Missing character message.");
        }

        const personality = String(
            prompt || "You are a friendly fictional character."
        ).slice(0, 2000);

        const characterName = String(name || "Character").slice(0, 60);

        const response = await readGroq(
            message.slice(0, 3000),
            `
You are ${characterName} in a fictional 3D episode.

Personality:
${personality}

Stay in character.
Respond naturally and concisely.
Do not claim to be a real person.
`
        );

        res.json({
            success: true,
            text: response
        });

    } catch (error) {
        console.error("Character AI error:", error);
        sendError(res, 500, error.message);
    }
});

// --------------------------------------------------
// FISH AUDIO TEXT TO SPEECH
// --------------------------------------------------

app.post("/api/fish", async (req, res) => {
    try {
        if (!FISH_API_KEY) {
            return sendError(res, 500, "FISH_API_KEY is not configured.");
        }

        const text = String(req.body.text || "").trim();
        const voiceId = String(req.body.fishaudio || "").trim();

        if (!text) {
            return sendError(res, 400, "Missing speech text.");
        }

        if (text.length > 3000) {
            return sendError(res, 400, "Speech text is too long.");
        }

        if (!voiceId) {
            return sendError(res, 400, "Missing Fish Audio voice ID.");
        }

        const response = await fetch("https://api.fish.audio/v1/tts", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${FISH_API_KEY}`,
                "Content-Type": "application/json",
                "model": FISH_MODEL
            },
            body: JSON.stringify({
                text,
                reference_id: voiceId,
                format: "mp3"
            })
        });

        if (!response.ok) {
            const errorText = await response.text();

            console.error("Fish Audio error:", errorText);

            return sendError(
                res,
                response.status,
                "Fish Audio could not generate speech."
            );
        }

        const audio = Buffer.from(await response.arrayBuffer());

        res.setHeader("Content-Type", "audio/mpeg");
        res.setHeader("Content-Length", audio.length);
        res.setHeader("Cache-Control", "no-store");

        res.send(audio);

    } catch (error) {
        console.error("Fish Audio error:", error);
        sendError(res, 500, error.message);
    }
});

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, "0.0.0.0", () => {
    console.log("--------------------------------");
    console.log("3D Episode Generator");
    console.log(`Running on port ${PORT}`);
    console.log("--------------------------------");
});