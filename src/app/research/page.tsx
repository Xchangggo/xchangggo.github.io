import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { researchThemes } from "@/content/research";
import { projects } from "@/content/projects";

export default function ResearchPage() {
  const projectsById = new Map(projects.map((project) => [project.id, project]));

  return (
    <Container className="space-y-12 py-10 md:space-y-14 md:py-16">
      <PageIntro
        eyebrow="Research"
        title="Research Framework"
        description="Focused themes in CNV and computational genomics, organized as concise modules for fast reading and clear project mapping."
        eyebrowKey="research.eyebrow"
        titleKey="research.framework_title"
        descriptionKey="research.framework_desc"
      />

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-line/70 bg-paper p-5 shadow-card">
          <p data-i18n="research.metric_themes" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Themes
          </p>
          <p className="mt-3 font-display text-4xl text-accent">{researchThemes.length}</p>
        </article>
        <article className="rounded-2xl border border-line/70 bg-paper p-5 shadow-card">
          <p data-i18n="research.metric_projects" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Linked projects
          </p>
          <p className="mt-3 font-display text-4xl text-[color:var(--color-accent-2)]">{projects.length}</p>
        </article>
        <article className="rounded-2xl border border-line/70 bg-paper p-5 shadow-card">
          <p data-i18n="research.metric_route" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Portfolio route
          </p>
          <Link href="/portfolio" data-i18n="nav.portfolio" className="mt-3 inline-flex text-lg font-semibold text-[color:var(--color-accent-3)] underline-offset-4 hover:underline">
            Portfolio
          </Link>
        </article>
      </section>

      <section className="space-y-5">
        {researchThemes.map((theme, idx) => (
          <Reveal key={theme.id} delay={idx * 0.04}>
            <article id={theme.id} className="rounded-2xl border border-line/70 bg-paper p-6 shadow-card md:p-8">
              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_280px]">
                <div>
                  <h2 data-i18n={`content.research.${theme.id}.title`} className="font-display text-3xl text-ink">
                    {theme.title}
                  </h2>
                  <p data-i18n={`content.research.${theme.id}.summary`} className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {theme.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {theme.keywords.map((item, itemIdx) => (
                      <Tag
                        key={item}
                        data-i18n={`content.research.${theme.id}.keywords.${itemIdx}`}
                        className={`keyword-tag keyword-tag--${itemIdx % 3}`}
                      >
                        {item}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-line/70 bg-paper/90 p-4">
                  <h3 data-i18n="research.methods" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Methods
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {theme.methods.map((item, itemIdx) => (
                      <li key={item} data-i18n={`content.research.${theme.id}.methods.${itemIdx}`}>
                        - {item}
                      </li>
                    ))}
                  </ul>
                  <h3 data-i18n="research.applications" className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Applications
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {theme.applications.map((item, itemIdx) => (
                      <li key={item} data-i18n={`content.research.${theme.id}.applications.${itemIdx}`}>
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {theme.relatedProjectIds?.length ? (
                <div className="mt-5 border-t border-line/70 pt-4">
                  <h3 data-i18n="research.related_projects" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Related projects
                  </h3>
                  <div className="mt-2 grid gap-3 md:grid-cols-2">
                    {theme.relatedProjectIds
                      .flatMap((projectId) => {
                        const project = projectsById.get(projectId);
                        return project ? [project] : [];
                      })
                      .map((project) => (
                        <Link
                          key={project.id}
                          href={`/portfolio#project-${project.id}`}
                          className="rounded-lg border border-line/70 bg-paper/90 p-3 transition-colors hover:border-accent/45"
                        >
                          <p data-i18n={`content.projects.${project.id}.title`} className="text-sm font-semibold text-ink">
                            {project.title}
                          </p>
                          <p data-i18n={`content.projects.${project.id}.period`} className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                            {project.period}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </section>
    </Container>
  );
}
