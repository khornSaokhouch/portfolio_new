"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import portfolioKnowledge from "@/data/portfolio-knowledge";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
};

// ─── Simple rule-based AI engine ───────────────────────────────────────────
// Helper to pick a random response for a more natural feel
const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

function getBotResponse(input: string): string {
  const q = input.toLowerCase().trim();
  const { owner, education, projects, certificates, allSkillNames, skills } =
    portfolioKnowledge;

  // Greetings
  if (/^(hi|hello|hey|sup|greetings|good\s*(morning|afternoon|evening))/.test(q)) {
    return pick([
      `Hey there! 👋 I'm ${owner.name}'s virtual assistant. How can I help you today? You can ask me about his skills, projects, or how to get in touch!`,
      `Hello! 🌟 Welcome to the portfolio. I'm here to answer any questions you have about ${owner.name}'s experience and work. What's on your mind?`,
      `Hi! 😊 It's great to meet you. I'm the friendly AI assistant here. Would you like to hear about some of the cool projects ${owner.name} has built?`
    ]);
  }

  // Who are you / about the bot
  if (/who are you|what are you|your name|about (you|this bot)/.test(q)) {
    return `I'm a friendly little AI assistant built right into this portfolio! 🤖 My job is to help you learn all about ${owner.name}'s skills, projects, and work experience. Ask me anything! ✨`;
  }

  // About the owner
  if (/who is (khorn|saokhouch)|about (him|you|the owner|the developer)|tell me about/.test(q)) {
    return `Oh, I'd love to tell you about him! 😊\n\n**${owner.name}** is a passionate **${owner.role}** based in ${owner.location}. He's currently in his 4th year studying IT Engineering at the Royal University of Phnom Penh. He absolutely loves building modern, responsive, and beautiful web applications! 🚀`;
  }

  // Contact info
  if (/contact|email|reach|get in touch|telegram|github/.test(q)) {
    return `You can easily reach ${owner.name} through any of these channels. He'd love to hear from you!\n\n📧 **Email:** ${owner.email}\n💬 **Telegram:** ${owner.telegram}\n🐙 **GitHub:** ${owner.github}`;
  }

  // Skills — general
  if (/skill|tech|technology|stack|language|framework|tool|what can (you|he)|use/.test(q)) {
    const cats = skills.map((cat) => `**${cat.category}:** ${cat.list.map((s) => s.name).join(", ")}`).join("\n");
    return `He has a fantastic toolkit! 🛠️ Here are ${owner.name}'s main technical skills:\n\n${cats}`;
  }

  // Specific skill check
  const mentionedSkill = allSkillNames.find((s) =>
    q.includes(s.toLowerCase())
  );
  if (mentionedSkill) {
    const category = skills.find((c) =>
      c.list.some((s) => s.name.toLowerCase() === mentionedSkill.toLowerCase())
    );
    return `Yes, absolutely! 🎉 ${owner.name} works with **${mentionedSkill}**${category ? ` (it's part of his **${category.category}** stack)` : ""}. Let me know if you want to see some projects built with it!`;
  }

  // Projects — list all
  if (/project(s)?|portfolio|work|built|created|what (have|has|did)/.test(q) && !/specific/.test(q)) {
    const list = projects
      .slice(0, 5) // Show top 5 to keep it friendly and not overwhelming
      .map((p, i) => `${i + 1}. **${p.Title}** (${p.Category})`)
      .join("\n");
    return `He's built some really amazing things! 💻 Here are a few of his top projects:\n\n${list}\n\nAsk me about any specific one, like *"Tell me about ${projects[0].Title}"* for more details!`;
  }

  // Specific project lookup
  const matchedProject = projects.find((p) =>
    q.includes(p.Title.toLowerCase()) ||
    p.Title.toLowerCase().split(" ").some((word) => word.length > 4 && q.includes(word))
  );
  if (matchedProject) {
    const tech = matchedProject.TechStack.join(", ");
    const link = matchedProject.ProjectLink ? `\n🔗 [Check out the Live Demo](${matchedProject.ProjectLink})` : "";
    const github = matchedProject.Github ? `\n🐙 [View the Code on GitHub](${matchedProject.Github})` : "";
    return `Great choice! ✨ **${matchedProject.Title}** is a fantastic ${matchedProject.Category.toLowerCase()} project.\n\n${matchedProject.Description}\n\n🛠️ **Built with:** ${tech}${link}${github}`;
  }

  // Education
  if (/education|study|university|degree|school|college|major|student/.test(q)) {
    const edu = education
      .map((e) => `📚 **${e.degree}**\n${e.university} (${e.year})`)
      .join("\n\n");
    return `Here is ${owner.name}'s educational background:\n\n${edu}`;
  }

  // Certifications
  if (/cert(ificate|ification)?|aws|alison|nicc|award/.test(q)) {
    const certs = certificates
      .map((c) => `🏆 **${c.title}** (${c.issuer})`)
      .join("\n");
    return `He's always learning! 🧠 Here are some of his certifications:\n\n${certs}`;
  }

  // Experience / job
  if (/experience|job|work|year|intern|employ|hire/.test(q)) {
    return `${owner.name} is a talented Year 4 IT Engineering student with strong hands-on experience building **fullstack web applications**, **frontend SPAs**, and mobile apps. He has successfully delivered ${projects.length} solid projects, spanning e-commerce, POS systems, and service marketplaces! 💼`;
  }

  // Availability / hire
  if (/hire|available|freelance|open to work|looking for/.test(q)) {
    return `Yes! 🌟 ${owner.name} is open to new opportunities and would love to chat. Feel free to reach out directly:\n\n📧 ${owner.email}\n💬 ${owner.telegram}`;
  }

  // Default fallback
  const suggestions = [
    "💡 What are his **skills**?",
    "📦 Show me his **projects**",
    "🎓 Where did he **study**?",
    "📧 How do I **contact** him?",
  ];
  return pick([
    `Hmm, I'm just a simple assistant and didn't quite catch that. 🤔 But I can definitely help you with these:\n\n${suggestions.join("\n")}`,
    `I'm not exactly sure about that one! 😅 Would you like to try asking about something else? For example:\n\n${suggestions.join("\n")}`,
    `Oops, my AI brain missed that! 🤖 Try asking me one of these instead:\n\n${suggestions.join("\n")}`
  ]);
}

// ─── Render message text with basic markdown-style formatting ───────────────
function renderText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Bold: **text**
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
    );
    return (
      <span key={i} className="block">
        {rendered}
        {i < lines.length - 1 && line === "" && <br />}
      </span>
    );
  });
}

// ─── Quick suggestions ──────────────────────────────────────────────────────
const QUICK_SUGGESTIONS = [
  "What are his skills?",
  "Show me projects",
  "Education background",
  "How to contact him?",
  "What certificates does he have?",
];

// ─── Main component ─────────────────────────────────────────────────────────
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: `Hi! 👋 I'm Saokhouch's AI assistant. Ask me anything about his skills, projects, education, or how to contact him!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Click outside to close (UX improvement)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && chatWindowRef.current && !chatWindowRef.current.contains(e.target as Node)) {
        // Only close if we're clicking outside the chat window and not on the toggle button
        const isToggleButton = (e.target as Element).closest('#chatbot-toggle-btn');
        if (!isToggleButton) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const botReply = getBotResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", text: botReply },
      ]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-32 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[350px] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white dark:bg-[#0d1117] max-h-[70vh] sm:max-h-[500px]"
            style={{ boxShadow: "0 25px 60px -10px rgba(0,0,0,0.4)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Portfolio Assistant</p>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online — Ask me anything!
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50 dark:bg-[#0d1117]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 items-end ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "bot"
                      ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                      : "bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                  }`}>
                    {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  {/* Bubble */}
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-sm"
                      : "bg-white dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 rounded-bl-sm"
                  }`}>
                    {renderText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 items-end"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1 items-center">
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 bg-zinc-50 dark:bg-[#0d1117] flex flex-wrap gap-2 border-t border-zinc-200 dark:border-white/10 shrink-0">
                {QUICK_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/40 border border-blue-200 dark:border-blue-700/50 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="flex gap-2 px-4 py-3 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0d1117] shrink-0"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-zinc-100 dark:bg-white/5 rounded-xl px-4 py-2.5 text-sm outline-none border border-zinc-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500 transition-colors text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        id="chatbot-toggle-btn"
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-[4.5rem] right-4 sm:right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/30 flex items-center justify-center"
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="relative">
              <MessageCircle size={22} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
