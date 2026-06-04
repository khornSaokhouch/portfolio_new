"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { certificates } from "@/data/certificates";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Award, Calendar } from "lucide-react";

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

export default function CertificationsSection() {
  // Try to get translation, fallback to English if not found
  const t = useTranslations("Index");
  const title = t.has("certifications") ? t("certifications") : "Certifications";

  return (
    <Section id="certifications" title={title} className="bg-white dark:bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group flex flex-col p-6 bg-zinc-50 dark:bg-white/5 dark:backdrop-blur-xl rounded-3xl border border-zinc-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            {/* Card inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <Link href={`/certifications/${cert.id}` as any} className="relative z-10 flex flex-col h-full cursor-pointer">
              {/* Image */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 flex-shrink-0 border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/50">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  <Award size={16} className="text-blue-500" />
                  <span className="font-semibold">{cert.issuer}</span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-auto line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
