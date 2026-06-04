"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const contactInfoItems = [
  { icon: <Mail size={20} />, title: "Email", detail: "khornsaokhouch@gmail.com", href: "mailto:khornsaokhouch@gmail.com", color: "text-[#EA4335]", bg: "bg-red-50 dark:bg-red-900/20" },
  { icon: <Phone size={20} />, title: "Phone", detail: "+855 12 345 678", href: "tel:+85512345678", color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
  { icon: <FaTelegram size={20} />, title: "Telegram", detail: "@khornsaokhouch", href: "https://t.me/khornsaokhouch", color: "text-[#26A5E4]", bg: "bg-sky-50 dark:bg-sky-900/20" },
  { icon: <MapPin size={20} />, title: "Location", detail: "Phnom Penh, Cambodia", href: "#", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
];

export default function ContactSection() {
  const t = useTranslations("Index");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" title={t("contact")} className="bg-zinc-50 dark:bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto relative z-10">

        {/* Left: Info */}
        <motion.div
          className="flex-1 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Get In Touch</p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Together!
              </span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I'm currently available for freelance work or full-time positions.
              If you have a project or just want to say hey, get in touch!
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            {contactInfoItems.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className={`p-3 ${info.bg} ${info.color} rounded-xl transition-transform group-hover:scale-110`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500 mb-0.5">{info.title}</p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{info.detail}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-white/5 dark:backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-white/10 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                placeholder="Hello, I would like to talk about..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <><Loader2 size={18} className="animate-spin" /> Sending...</>
              ) : submitted ? (
                <><CheckCircle2 size={18} /> Sent!</>
              ) : (
                <><Send size={18} /> Send Message</>
              )}
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-xl text-center text-sm font-medium border border-green-200 dark:border-green-800"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>
    </Section>
  );
}
