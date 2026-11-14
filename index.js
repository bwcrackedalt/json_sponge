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

Project setting:
- Available Maps: 
/maps/krusty-krabs.glb
/maps/bikini1.glb
/maps/conch.glb
- Perch is a news fish reporter.
- Plankton is a plankton tries to steal the Krabby Patty formula.
- Squidward is a squid.
- Spongebob is the main character in the show.
- The built-in character models:
/characters/
perch.glb
plankton.glb
and more
do not always use those.
- Fish Audio voice IDs, when needed, are configured for anyone.
perch: 89ad149cdb9b432ead021c5bc60236c9
plankton: 7c71952bfb624de1a54e6b47a04c4bff
squidward: faa6ab0c00e4476b84a9226326acedea
spongebob: 9845e056f37b470d9a1005e41c864e25

Supported commands:

1. Create a character:
{
  "createCharacter": {
    "name": "Perch",
    "model": "/characters/perch.glb",
    "position": [0, 0, 0],
    "prompt": "A friendly fish reporter."
    "fishaudio": your fish audio id idk lol
  }
}
Do not make the caracters aligned in a line. They should be at random positions.
2. Create multiple NPCs:
{
  "createNPCS": {
    "count": 2,
    "models": ["/npcs/fish1.glb", "/npcs/fish2.glb"],
    "rangePos": 15,
    "wander": true
  }
}

3. Create traffic:
{
  "createTraffic": {
    "cars": ["/cars/car1.glb", "/cars/car2.glb"], !THESE ARE IMPORTANT!
    "speed": 5,
    "count": 1
  }
}

4. Dialogue:
{
  "target": "Perch",
  "text": "Hello!"
}

5. Load a map:
{
  "map": "/maps/[MAP OF THE LIST]"
}
(Important, do not forget)
6. Title card:
{"title" THE EPISODE TITLE IDK MAYBE NOT MORE THAT 10 WORDS}
(Important, do not forget)
Rules:
- Create characters before their dialogue.
- Dialogue targets must match character names; generated NPCs are named "NPC 1", "NPC 2", and so on.
- Use only these supported command formats and fields.
- Use the built-in model or a valid model URL supplied by the user. Never invent asset URLs.
- Only include a Fish Audio voice ID if one is explicitly configured for that character; otherwise omit it.
- Keep the episode suitable for a general audience.
- Output valid JSON only.
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