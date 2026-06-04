"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ExternalLink, Eye, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
  exit: { opacity: 0, scale: 0.9, filter: "blur(8px)", transition: { duration: 0.2 } },
};

export default function ProjectsSection() {
  const t = useTranslations("Index");

  return (
    <Section id="projects" title={t("projects")} className="bg-white dark:bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              className="group flex flex-col bg-zinc-50 dark:bg-white/5 dark:backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-shadow"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={project.Img}
                  alt={project.Title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <Link
                    href={`/projects/${project.id}` as any}
                    className="p-3 bg-white text-black rounded-full shadow-lg hover:scale-115 active:scale-95 transition-transform"
                    title="View Details"
                  >
                    <Eye size={20} />
                  </Link>
                  {project.Github && (
                    <motion.a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full shadow-lg"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      title="GitHub"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                  {project.ProjectLink && (
                    <motion.a
                      href={project.ProjectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full shadow-lg"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <Link href={`/projects/${project.id}` as any} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <h3 className="text-lg font-bold line-clamp-1">{project.Title}</h3>
                  </Link>
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full shrink-0 ml-2">
                    {project.Category}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-5 flex-1 line-clamp-3 leading-relaxed">
                  {project.Description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.TechStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium px-2.5 py-1 bg-zinc-200 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 rounded-lg">
                      {tech}
                    </span>
                  ))}
                  {project.TechStack.length > 4 && (
                    <span className="text-xs font-medium px-2.5 py-1 bg-zinc-200 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 rounded-lg">
                      +{project.TechStack.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex justify-end">
                  <Link
                    href={`/projects/${project.id}` as any}
                    className="flex items-center justify-center py-2 px-4 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-700 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 dark:text-blue-400 font-medium text-sm transition-colors gap-2"
                  >
                    {t("projectDetails")}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
