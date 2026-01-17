
import React, { useEffect, useRef, useState } from "react";


export default function ChatUI() {
  const [messages, setMessages] = useState([{
    id:1, text:'welcome to the chat',sender:"Bot",Timestamp: new Date().toISOString()
  }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      Timestamp:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);
    // Simulated bot reply
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "This is a simulated real-time reply 🤖",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1500);
  };


  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="chat-container">
      <header>Chat App</header>

      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
          <strong>{msg.sender} : {msg.text}</strong>
          <p>{msg.Timestamp}</p>
          </div>
        ))}

        {typing && <div className="typing">Bot is typing...</div>}
        <div ref={bottomRef}></div>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
