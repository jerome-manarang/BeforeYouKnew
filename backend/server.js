require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors());


let userContext = [];
let userProfile = {};


// stores description of user's younger self
app.post("/setProfile", (req, res) => {
    userProfile = req.body;
    res.json({message: "Profile saved."})
});

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;


        let systemPrompt = `You are the user's younger self. 
        They described their younger self as: "${userProfile.description || "unknown"}". 
        They remember these childhood events: "${userProfile.notable_events || "not specified"}". 
        They used to enjoy: "${userProfile.hobbies || "unknown hobbies"}". 
        Respond with curiosity and excitement, as a younger version of them would.`;

        // store user message
        userContext.push({ role: "user", content: userMessage});

        // create dynamic convo history
        let messages = [
            {role: "system", content: systemPrompt}, 
            ...userContext // include chat history
        ];

        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4",
                messages: messages, // Updated with dynamic memory
            },
            { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
        );
        
        const aiResponse = response.data.choices[0].message.content;
        userContext.push({role : "assistant", content: aiResponse});

        res.json({response : aiResponse});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing request"})
    }     
    
});

app.post("/reset", (req, res) => {
    userContext = [];
    userProfile = {};
    res.json({ message: "Chat history and profile cleared."});

});

app.listen(5000, () => console.log("Server running on port 5000"));