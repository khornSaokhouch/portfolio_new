"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { Download, Sparkles, Code2, GraduationCap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
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

const highlights = [
  { icon: <GraduationCap size={18} />, label: "IT Engineering – RUPP, Year 4" },
  { icon: <Code2 size={18} />, label: "Frontend / Backend & Mobile Developer" },
  { icon: <Sparkles size={18} />, label: "Passionate about great UX" },
];

export default function AboutSection() {
  const t = useTranslations("Index");

  return (
    <Section id="about" title={t("about")} className="bg-zinc-50 dark:bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Text content */}
        <motion.div
          className="space-y-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="space-y-1">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              About Me
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I am a passionate Year 4 student majoring in Information Technology Engineering at the Royal University of Phnom Penh (RUPP). My focus is on creating beautiful, functional, and responsive web applications.
            </p>
            <p>
              My journey in software development began with a strong curiosity for how things work on the internet. Over the years, I've honed my skills in frontend and full-stack development with modern technologies like React, Next.js, and Tailwind CSS.
            </p>
          </motion.div>

          {/* Highlight pills */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
                {item.label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div variants={itemVariants} className="flex justify-center pt-2">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={18} />
              {t("downloadCV")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
