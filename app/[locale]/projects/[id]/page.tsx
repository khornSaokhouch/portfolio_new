import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.Title} | Khorn Saokhouch` };
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const { id } = await params;
  const t = await getTranslations("Index");
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#020617] py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          {t("backToHome")}
        </Link>

        <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl">
          {/* Hero Image */}
          <div className="relative w-full h-[40vh] min-h-[300px] max-h-[500px] bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={project.Img}
              alt={project.Title}
              fill
              className="object-contain sm:object-cover"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-4">
                  {project.Category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  {project.Title}
                </h1>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.TechStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 shrink-0">
                {project.Github && (
                  <a 
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors rounded-xl font-medium"
                  >
                    <FaGithub size={20} />
                    {t("github")}
                  </a>
                )}
                {project.ProjectLink && (
                  <a 
                    href={project.ProjectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all rounded-xl font-medium"
                  >
                    <ExternalLink size={20} />
                    {t("liveDemo")}
                  </a>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-zinc-200 dark:bg-white/10 mb-8" />

            {/* Details section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">{t("projectDetails")}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed whitespace-pre-wrap">
                    {project.Description}
                  </p>
                </div>

                {/* Scope */}
                {project.Scope && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">{t.has("scope") ? t("scope") : "Project Scope"}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                      {project.Scope}
                    </p>
                  </div>
                )}

                {/* Features */}
                {project.Features && project.Features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">{t.has("features") ? t("features") : "Key Features"}</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 text-lg">
                      {project.Features.map((feature, idx) => (
                        <li key={idx} className="leading-relaxed">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Details */}
                {project.TechnicalDetails && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">{t.has("technicalDetails") ? t("technicalDetails") : "Technical Details"}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                      {project.TechnicalDetails}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {/* Team */}
                {project.Team && project.Team.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4">Team</h3>
                    <ul className="space-y-3">
                      {project.Team.map((member, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm shrink-0">
                            {member.charAt(0)}
                          </div>
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Hosting */}
                {project.Hosting && (
                  <div>
                    <h3 className="text-lg font-bold mb-4">{t.has("hosting") ? t("hosting") : "Hosting & Deployment"}</h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium">
                      {project.Hosting}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
