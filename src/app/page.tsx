import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { siteProfile } from "@/content/site";
import { projects } from "@/content/projects";
import { researchThemes } from "@/content/research";
import { news } from "@/content/news";
import { formatMonth } from "@/lib/format";

export default function HomePage() {
  const topProjects = projects.slice(0, 3);
  const topResearch = researchThemes.slice(0, 3);
  const topNews = news.slice(0, 4);

  return (
    <Container className="py-10 md:py-14">
      <section className="grid items-start gap-8 border-b border-line pb-10 md:grid-cols-[240px_minmax(0,1fr)]">
        <div className="mx-auto flex h-[280px] w-full max-w-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-accentSoft to-paper shadow-sm md:mx-0">
          <Image
            src="/xumengchang.jpg"
            alt={`${siteProfile.name} portrait`}
            width={220}
            height={280}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <p data-i18n="home.profile" className="text-sm font-medium uppercase tracking-[0.16em] text-muted">Academic Profile</p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            {siteProfile.name} <span className="text-2xl text-muted md:text-3xl">({siteProfile.bilingualName})</span>
          </h1>
          <p data-i18n="home.tagline" className="text-lg text-ink/90">{siteProfile.tagline}</p>
          <p data-i18n="home.intro" className="max-w-3xl text-base leading-relaxed text-muted">{siteProfile.intro}</p>

          <div className="grid gap-2 rounded-xl border border-line bg-paper/60 p-4 text-sm md:grid-cols-2">
            <p>
              <span data-i18n="home.current" className="font-semibold text-ink">Current:</span>{" "}
              <span data-i18n="content.site.currentRole.title">{siteProfile.currentRole.title}</span>
            </p>
            <p>
              <span data-i18n="home.institution" className="font-semibold text-ink">Institution:</span>{" "}
              <span data-i18n="content.site.currentRole.institution">{siteProfile.currentRole.institution}</span>
            </p>
            <p>
              <span data-i18n="home.location" className="font-semibold text-ink">Location:</span>{" "}
              <span data-i18n="content.site.location">{siteProfile.location}</span>
            </p>
            <p>
              <span data-i18n="home.email" className="font-semibold text-ink">Email:</span> {siteProfile.email}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-1 text-sm font-semibold text-accent">
            <Link href="/research" data-i18n="nav.research" className="hover:underline">
              Research
            </Link>
            <Link href="/projects" data-i18n="nav.projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/cv" data-i18n="nav.cv" className="hover:underline">
              CV
            </Link>
            <Link href="/contact" data-i18n="nav.contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 data-i18n="home.research_focus" className="font-display text-2xl text-ink md:text-3xl">Research Focus</h2>
          <div className="space-y-3">
            {topResearch.map((theme) => (
              <article key={theme.id} className="rounded-xl border border-line p-4">
                <h3 data-i18n={`content.research.${theme.id}.title`} className="font-semibold text-ink">
                  {theme.title}
                </h3>
                <p data-i18n={`content.research.${theme.id}.summary`} className="mt-1 text-sm leading-relaxed text-muted">
                  {theme.summary}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 data-i18n="home.selected_projects" className="font-display text-2xl text-ink md:text-3xl">Selected Projects</h2>
          <div className="space-y-3">
            {topProjects.map((project) => (
              <article key={project.id} className="rounded-xl border border-line p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 data-i18n={`content.projects.${project.id}.title`} className="font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span data-i18n={`content.projects.${project.id}.period`} className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {project.period}
                  </span>
                </div>
                <p data-i18n={`content.projects.${project.id}.summary`} className="mt-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <Tag key={tag} data-i18n={`content.projects.${project.id}.tags.${idx}`}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line pt-8">
        <h2 data-i18n="home.recent_news" className="font-display text-2xl text-ink md:text-3xl">Recent News</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {topNews.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <span className="font-semibold text-ink">{formatMonth(item.date)}</span>
              <span className="px-2">-</span>
              <span data-i18n={`content.news.${item.date}.title`}>{item.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
