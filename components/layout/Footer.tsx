"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const socials = [
  { icon: <FaGithub size={18} />, href: "https://github.com/khornSaokhouch", label: "GitHub", color: "hover:text-[#181717] dark:hover:text-white" },
  { icon: <FaLinkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
  { icon: <FaEnvelope size={18} />, href: "mailto:khornsaokhouch@gmail.com", label: "Email", color: "hover:text-[#EA4335]" },
  { icon: <FaTelegram size={18} />, href: "https://t.me/khornsaokhouch", label: "Telegram", color: "hover:text-[#26A5E4]" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-transparent py-8 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-zinc-500 dark:text-zinc-400 text-sm text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Khorn Saokhouch</span>
          . All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`text-zinc-500 dark:text-zinc-500 transition-colors ${s.color}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
