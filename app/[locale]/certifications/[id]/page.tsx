import { notFound } from "next/navigation";
import { certificates } from "@/data/certificates";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Award, Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const { id } = await params;
  const cert = certificates.find((c) => c.id === id);
  if (!cert) return { title: "Certificate Not Found" };
  return { title: `${cert.title} | Khorn Saokhouch` };
}

export default async function CertificateDetailsPage({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const { id } = await params;
  const t = await getTranslations("Index");
  const cert = certificates.find((c) => c.id === id);

  if (!cert) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#020617] py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          href="/#certifications" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          {t("backToHome")}
        </Link>

        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl">
          {/* Certificate Image */}
          <div className="relative w-full h-[50vh] min-h-[400px] max-h-[700px] bg-zinc-100 dark:bg-zinc-900 p-4 md:p-12">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain bg-zinc-100 dark:bg-black/50"
                priority
              />
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {cert.title}
                </h1>
                
                <div className="flex flex-wrap gap-6 text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Award size={20} className="text-blue-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-200 dark:bg-white/10 mb-8" />

            <div className="max-w-3xl">
              <h3 className="text-xl font-bold mb-4">{t("certificateDetails")}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed whitespace-pre-wrap">
                {cert.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
