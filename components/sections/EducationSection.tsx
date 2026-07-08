"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { education } from "@/data/education";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

export default function EducationSection() {
  const t = useTranslations("Index");

  return (
    <Section id="education" title={t("education")} className="bg-white dark:bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Vertical line (Mobile/Tablet only) */}
        <div className="md:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/50 dark:via-blue-500/50 to-transparent" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-12 sm:pl-16 md:pl-0 group"
            >
              {/* Timeline dot (Mobile/Tablet only) */}
              <motion.div
                className="md:hidden absolute left-4 sm:left-5 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-white dark:border-zinc-950 shadow-md z-10"
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />

              {/* Card */}
              <motion.div
                className="relative h-full p-6 rounded-2xl bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-zinc-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card inner glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Year badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                      <Calendar size={13} />
                      {item.year}
                    </span>
                  </div>

                  {/* Degree */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-0.5 p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <h3 className="text-lg font-bold leading-snug">{item.degree}</h3>
                  </div>

                  {/* School & Location */}
                  <div className="pl-11 space-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-semibold text-zinc-700 dark:text-zinc-300">{item.university}</p>
                      <p className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500">
                        <MapPin size={13} />
                        {item.location}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-3 leading-relaxed border-t border-zinc-100 dark:border-white/5 mt-3">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
