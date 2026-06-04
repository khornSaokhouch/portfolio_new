"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "km" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center"
      aria-label="Toggle Language"
    >
      {locale === "en" ? (
        <img src="/assets/lang/en.png" alt="English" className="rounded-sm h-6 w-auto object-cover" />
      ) : (
        <img src="/assets/lang/kh.png" alt="Khmer" className="rounded-sm h-6 w-auto object-cover" />
      )}
    </button>
  );
}
