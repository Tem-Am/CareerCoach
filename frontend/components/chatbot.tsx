import { useState, useRef, useEffect } from "react";

type ChatBoxCloseProps = {
  onClose: () => void;
};

export default function ChatBoxUI({ onClose }: ChatBoxCloseProps) {
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
    <div className="w-80 max-w-sm fixed bottom-20 right-4 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
      {/* Header with close button */}
      <div className="px-3 py-2.5 bg-gradient-to-r from-purple-600 to-violet-500 text-white flex items-center justify-between">
        <h2 className="font-semibold text-sm">Career Chat</h2>
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors duration-200"
          aria-label="Close chat"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="h-72 p-3 overflow-y-auto bg-gray-50 space-y-2.5">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.type === "outgoing" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-1.5 rounded-2xl text-sm max-w-[75%] shadow-sm ${
                msg.type === "outgoing"
                  ? "bg-violet-600 text-white rounded-br-md"
                  : "bg-white border border-gray-200 rounded-bl-md"
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
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
}
