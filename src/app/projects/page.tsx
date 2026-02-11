import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content/projects";
import { researchThemes } from "@/content/research";

export default function ProjectsPage() {
  const researchById = new Map(researchThemes.map((theme) => [theme.id, theme]));

  return (
    <Container className="space-y-16 py-10 md:py-16">
      <PageIntro
        eyebrow="Projects"
        title="Applied research and engineering"
        description="Selected work in CNV detection, bioinformatics workflows, scientific computing with R/Python, and statistical modeling competitions."
        eyebrowKey="projects.eyebrow"
        titleKey="projects.title"
        descriptionKey="projects.description"
      />

      <section className="grid gap-5 md:grid-cols-2">
        {projects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.03}>
            <article id={project.id} className="h-full rounded-2xl border border-line/70 bg-paper/90 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-start justify-between gap-3">
                <h2 data-i18n={`content.projects.${project.id}.title`} className="font-display text-2xl text-ink">
                  {project.title}
                </h2>
                <span data-i18n={`content.projects.${project.id}.period`} className="shrink-0 rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold text-accent">
                  {project.period}
                </span>
              </div>
              <p data-i18n={`content.projects.${project.id}.summary`} className="mt-4 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <Tag key={tag} data-i18n={`content.projects.${project.id}.tags.${tagIdx}`}>
                    {tag}
                  </Tag>
                ))}
              </div>

              {project.relatedResearchIds?.length ? (
                <div className="mt-5 border-t border-line/70 pt-4">
                  <h3 data-i18n="projects.related_research" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Related research
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.relatedResearchIds
                      .flatMap((themeId) => {
                        const theme = researchById.get(themeId);
                        return theme ? [theme] : [];
                      })
                      .map((theme) => (
                        <Link
                          key={theme.id}
                          href={`/research#${theme.id}`}
                          data-i18n={`content.research.${theme.id}.title`}
                          className="rounded-full border border-line/80 bg-paper/75 px-3 py-1 text-xs font-semibold text-ink hover:border-accent/40"
                        >
                          {theme.title}
                        </Link>
                      ))}
                  </div>
                </div>
              ) : null}

              {project.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.map((linkItem, linkIdx) => (
                    <Link
                      key={linkItem.href}
                      href={linkItem.href}
                      target="_blank"
                      rel="noreferrer"
                      data-i18n={`content.projects.${project.id}.links.${linkIdx}.label`}
                      className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                    >
                      {linkItem.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </section>
    </Container>
  );
}
