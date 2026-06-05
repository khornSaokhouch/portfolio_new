"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  ExternalLink,
  Eye,
  Globe,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type DevType = "web" | "android";

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 75, damping: 16 },
  },
};

// ─── Shared action link row (always visible — works on touch & mouse) ─────────

function ActionLinks({
  project,
  size = 16,
  btnClass = "p-2.5",
}: {
  project: any;
  size?: number;
  btnClass?: string;
}) {
  return (
    <>
      <Link
        href={`/projects/${project.id}` as any}
        className={`${btnClass} bg-white/90 text-black rounded-full shadow-lg active:scale-90 hover:scale-110 transition-transform backdrop-blur-sm`}
        title="View Details"
      >
        <Eye size={size} />
      </Link>
      {project.Github && (
        <a
          href={project.Github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} bg-white/90 text-black rounded-full shadow-lg active:scale-90 hover:scale-110 transition-transform backdrop-blur-sm`}
          title="GitHub"
        >
          <FaGithub size={size} />
        </a>
      )}
      {project.ProjectLink && (
        <a
          href={project.ProjectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} bg-white/90 text-black rounded-full shadow-lg active:scale-90 hover:scale-110 transition-transform backdrop-blur-sm`}
          title="Live Demo"
        >
          <ExternalLink size={size} />
        </a>
      )}
    </>
  );
}

// ─── Web Project Card (landscape) ────────────────────────────────────────────

function WebProjectCard({ project, t }: { project: any; t: any }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group flex flex-col bg-zinc-50 dark:bg-white/[0.03] dark:backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-200/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-blue-500/5 transition-all duration-300"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* ── Image ── */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden flex-shrink-0 bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.Img}
          alt={project.Title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* ── Desktop hover overlay (mouse only) ── */}
        <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-3">
          <ActionLinks project={project} size={17} btnClass="p-2.5" />
        </div>

        {/* ── Mobile persistent action bar (touch-first) ── */}
        <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-3 px-3 flex gap-2 justify-end">
          <ActionLinks project={project} size={15} btnClass="p-2" />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title + badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link
            href={`/projects/${project.id}` as any}
            className="flex-1 min-w-0 hover:text-blue-600 dark:hover:text-blue-400 active:text-blue-600 dark:active:text-blue-400 transition-colors"
          >
            <h3 className="text-[14px] sm:text-[15px] font-bold line-clamp-1">
              {project.Title}
            </h3>
          </Link>
          <span className="shrink-0 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/40">
            {project.Category}
          </span>
        </div>

        {/* Description */}
        <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4 flex-1 line-clamp-2 leading-relaxed">
          {project.Description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
          {project.TechStack.slice(0, 3).map((tech: string, idx: number) => (
            <span
              key={idx}
              className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 bg-zinc-200/80 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.TechStack.length > 3 && (
            <span className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 bg-zinc-200/80 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 rounded-md">
              +{project.TechStack.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={`/projects/${project.id}` as any}
            className="inline-flex items-center gap-1.5 py-2 px-3 sm:px-4 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 active:bg-blue-600/25 text-blue-700 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 dark:active:bg-blue-500/25 dark:text-blue-400 font-medium text-xs transition-colors"
          >
            {t("projectDetails")}
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Android Project Card (clean showcase style) ─────────────────────────────

function AndroidProjectCard({ project, t }: { project: any; t: any }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* ── Top Banner (4:3, screenshot or gradient) ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {project.Img ? (
          <>
            <Image
              src={project.Img}
              alt={project.Title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle gradient scrim at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </>
        ) : (
          /* No-image: clean gradient with centered monogram */
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {project.Title.charAt(0)}
              </span>
            </div>
            {/* Subtle noise / circles */}
            <div className="absolute top-3 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-2 w-28 h-28 bg-indigo-400/20 rounded-full blur-3xl" />
          </div>
        )}

        {/* Category pill — top-left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 dark:bg-zinc-900/80 text-violet-700 dark:text-violet-300 backdrop-blur-sm shadow-sm">
            {project.Category}
          </span>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">
        {/* Title */}
        <div>
          <Link
            href={`/projects/${project.id}` as any}
            className="group/title"
          >
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover/title:text-violet-600 dark:group-hover/title:text-violet-400 transition-colors leading-snug line-clamp-1">
              {project.Title}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            {project.Description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.TechStack.slice(0, 3).map((tech: string, idx: number) => (
            <span
              key={idx}
              className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.TechStack.length > 3 && (
            <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
              +{project.TechStack.length - 3}
            </span>
          )}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800">
          <Link
            href={`/projects/${project.id}` as any}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
          >
            View details
            <ArrowRight size={13} />
          </Link>
          <ActionLinks project={project} size={14} btnClass="p-1.5" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  const t = useTranslations("Index");
  const [activeDevType, setActiveDevType] = useState<DevType>("web");
  const [activeFilter, setActiveFilter] = useState("All");

  const webFilters = ["All", "Frontend", "Fullstack"];
  const androidFilters = ["All", "Native", "Cross-Platform"];
  const currentFilters = activeDevType === "web" ? webFilters : androidFilters;

  const filteredProjects = projects.filter((p) => {
    const pType = (p as any).DeveloperType ?? "web";
    if (pType !== activeDevType) return false;
    if (activeFilter === "All") return true;
    return p.Category === activeFilter;
  });

  const handleSwitch = (type: DevType) => {
    if (type === activeDevType) return;
    setActiveDevType(type);
    setActiveFilter("All");
  };

  const isWeb = activeDevType === "web";

  return (
    <Section
      id="projects"
      title={t("projects")}
      className="bg-white dark:bg-transparent relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Developer Type Toggle ── */}
      <div className="flex justify-center mb-8 sm:mb-10 relative z-10 px-4">
        <div className="relative flex w-full sm:w-auto sm:inline-flex items-center p-1.5 bg-zinc-100 dark:bg-zinc-800/60 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-inner backdrop-blur-sm overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {/* Web button */}
          <button
            id="tab-web-developer"
            onClick={() => handleSwitch("web")}
            className={`relative flex flex-1 sm:flex-none sm:px-8 items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 select-none active:opacity-80 whitespace-nowrap ${
              isWeb
                ? "text-white"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white"
            }`}
          >
            {isWeb && (
              <motion.div
                layoutId="devTypeBg"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/25"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Globe size={16} className="shrink-0" />
              <span>{t("webDeveloper")}</span>
            </span>
          </button>

          {/* Android button */}
          <button
            id="tab-android-developer"
            onClick={() => handleSwitch("android")}
            className={`relative flex flex-1 sm:flex-none sm:px-8 items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 select-none active:opacity-80 whitespace-nowrap ${
              !isWeb
                ? "text-white"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white"
            }`}
          >
            {!isWeb && (
              <motion.div
                layoutId="devTypeBg"
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 rounded-xl shadow-lg shadow-violet-500/25"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Smartphone size={16} className="shrink-0" />
              <span>{t("androidDeveloper")}</span>
            </span>
          </button>
        </div>
      </div>

      {/* ── Sub-Category Filters ── */}
      <div className="flex justify-center mb-8 sm:mb-10 relative z-10 px-4">
        <div className="relative flex w-full sm:w-auto sm:inline-flex items-center p-1.5 bg-zinc-100 dark:bg-zinc-800/60 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-inner backdrop-blur-sm overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {currentFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative flex-1 sm:flex-none sm:px-8 px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap active:scale-95 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="filterBg"
                    className={`absolute inset-0 rounded-xl shadow-md ${
                      isWeb
                        ? "bg-blue-600 shadow-blue-500/20"
                        : "bg-violet-600 shadow-violet-500/20"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Project count ── */}
      <div className="flex justify-center mb-6 sm:mb-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${activeDevType}-${activeFilter}-count`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-medium text-zinc-400 dark:text-zinc-500"
          >
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"} found
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ── Cards Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeDevType}-${activeFilter}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          className={`relative z-10 grid ${
            isWeb
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          }`}
        >
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full py-20 sm:py-24 flex flex-col items-center gap-4"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center border border-zinc-200 dark:border-white/10">
                {isWeb ? (
                  <Globe size={26} className="text-zinc-400" />
                ) : (
                  <Smartphone size={26} className="text-zinc-400" />
                )}
              </div>
              <p className="text-zinc-400 text-sm font-medium">
                {t("noProjects")}
              </p>
            </motion.div>
          ) : (
            filteredProjects.map((project) =>
              isWeb ? (
                <WebProjectCard key={project.id} project={project} t={t} />
              ) : (
                <AndroidProjectCard key={project.id} project={project} t={t} />
              )
            )
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
