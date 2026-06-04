"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { categorizedSkills } from "@/data/skills";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
};

export default function SkillsSection() {
  const t = useTranslations("Index");

  return (
    <Section id="tech-stack" title={t("techStack")} className="bg-zinc-50 dark:bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {categorizedSkills.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group p-8 bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl border border-zinc-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            {/* Card inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {category.list.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={skillVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-white/5 rounded-full border border-zinc-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-400/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-default"
                  >
                    <div className="relative w-5 h-5">
                      <Image src={skill.image} alt={skill.name} fill sizes="20px" className="object-contain" />
                    </div>
                    <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
