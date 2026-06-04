"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Index");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              {t("greeting")}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6"
            >
              {t("role")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t("tagline")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto"
              >
                {t("viewProjects")}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors w-full sm:w-auto"
              >
                {t("contactMe")}
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <SocialLink href="https://github.com/khornSaokhouch" icon={<FaGithub size={24} />} colorClass="text-[#181717] dark:text-white" />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={24} />} colorClass="text-[#0A66C2]" />
              <SocialLink href="mailto:khornsaokhouch@gmail.com" icon={<FaEnvelope size={24} />} colorClass="text-[#EA4335]" />
              <SocialLink href="https://t.me/khornsaokhouch" icon={<FaTelegram size={24} />} colorClass="text-[#26A5E4]" />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-300 dark:from-blue-600 dark:to-cyan-400 blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
                <Image
                  src="/assets/my-picture.jpg"
                  alt="Khorn Saokhouch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, colorClass }: { href: string; icon: React.ReactNode; colorClass?: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center p-3 rounded-full bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors ${colorClass || "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"}`}
    >
      {icon}
    </motion.a>
  );
}
