"use client";

import * as React from "react";
import { Link } from "@/i18n/routing";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Index");
  const [activeSection, setActiveSection] = React.useState("/");
  const pathname = usePathname();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === "home" ? "/" : `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const ids = ["home", "about", "education", "certifications", "tech-stack", "projects", "contact"];
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "#about" },
    { name: t("education"), href: "#education" },
    { name: t.has("certifications") ? t("certifications") : "Certifications", href: "#certifications" },
    { name: t("techStack"), href: "#tech-stack" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-[#020617]/50 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl tracking-tighter">
              Khorn Saokhouch
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative flex items-center p-1 bg-zinc-100 dark:bg-zinc-800/60 rounded-full border border-zinc-200 dark:border-white/10 shadow-inner backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href as any}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navBg"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md shadow-blue-500/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-zinc-200 dark:border-zinc-800 pl-4">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile top controls */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeSwitcher />
          </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (Bottom Floating Pill) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm flex justify-center">
        <div className="relative flex items-center p-1.5 bg-zinc-100/95 dark:bg-zinc-800/80 rounded-full border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href as any}
                className={`relative flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 whitespace-nowrap active:scale-95 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navBgMobile"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md shadow-blue-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
