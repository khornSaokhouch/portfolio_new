"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub size={18} />, href: "https://github.com/khornSaokhouch", label: "GitHub", color: "text-[#181717] dark:text-white" },
  { icon: <FaLinkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn", color: "text-[#0A66C2]" },
  { icon: <FaEnvelope size={18} />, href: "mailto:khornsaokhouch4456@gmail.com", label: "Email", color: "text-[#EA4335]" },
  { icon: <FaTelegram size={18} />, href: "https://t.me/Khouch04", label: "Telegram", color: "text-[#26A5E4]" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              className={`transition-all hover:opacity-80 ${s.color}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
