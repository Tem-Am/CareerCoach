import { useState, useRef, useEffect } from "react";


export default function ChatBoxUI() {
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { type: "outgoing", text: input }]);
    setInput("");
  };

  return (  

    <div className="w-80 max-w-sm fixed bottom-24 right-6 z-50 flex flex-col rounded-xl shadow-xl overflow-hidden border border-gray-200 bg-white">
      
      {/* Header with X button */}
      <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-500 text-white flex items-center justify-between">
        <h2 className="font-semibold text-sm">Career Chat</h2>
        {/* THIS CLOSES THE CHATBOX */}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.type === "outgoing" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${
                msg.type === "outgoing"
                  ? "bg-violet-600 text-white"
                  : "bg-white border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 p-3 border-t bg-white">
        <input
          type="text"
          placeholder="Write a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:brightness-110 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
