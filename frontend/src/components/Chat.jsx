import React, { useState } from "react";
import axios from "axios";


const Chat = ({ onEnd }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [cracks, setCracks] = useState(0);

    const sendMessage = async () => {
        if (!input) return;
        const userMessage = {sender: "You", text: input};

        setMessages([...messages, userMessage]);

        const response = await axios.post("http://localhost:5000/chat", { message: input});

        const aiMessage = {sender: "Younger Self" , text: response.data.response};
        setMessages((prev) => [...prev, aiMessage]);

        setInput("");
        setCracks((prev)=> prev + 1);
        if (cracks >= 5) onEnd();
    };
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h2 className="text-lg">Try reaching out to your younger self...</h2>
            <div className="mt-4 p-4 bg-black rounded-lg w-3/4 h-80 overflow-y-scroll">
                {messages.map((msg, i) => (
                    <p key={i} className={msg.sender === "You" ? "text-right" : "text-left"}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="mt-4 p-2 text-black rounded-md w-64"
            />
            <button onClick={sendMessage} className="mt-4 px-6 py-2 bg-white text-black rounded-full">
                Send
            </button>
        </div>
    );
};

export default Chat;