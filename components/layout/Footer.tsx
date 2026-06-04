import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Index");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          © {currentYear} Khorn Saokhouch. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/khornSaokhouch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
