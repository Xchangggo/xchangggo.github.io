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
    <Container className="space-y-10 py-10 md:space-y-12 md:py-16">
      <PageIntro
        eyebrow="Research"
        title="Research Framework"
        description="Focused themes in CNV and computational genomics, organized as concise modules for fast reading and clear project mapping."
        eyebrowKey="research.eyebrow"
        titleKey="research.framework_title"
        descriptionKey="research.framework_desc"
      />

      <section className="focus-panel rounded-2xl p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p data-i18n="research.metric_themes" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Themes
            </p>
            <p className="mt-2 font-display text-5xl text-accent">{researchThemes.length}</p>
            <p data-i18n="research.framework_desc" className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Focused themes in CNV and computational genomics, organized as concise modules for fast reading and clear project mapping.
            </p>
          </div>
          <div className="soft-panel rounded-xl p-4">
            <p data-i18n="research.metric_projects" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Linked projects
            </p>
            <p className="mt-2 font-display text-4xl text-[color:var(--color-accent-2)]">{projects.length}</p>
            <Link href="/portfolio" data-i18n="nav.portfolio" className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-accent-3)] underline-offset-4 hover:underline">
              Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="soft-panel rounded-2xl p-3 md:p-5">
        <div className="list-divider">
          {researchThemes.map((theme, idx) => (
            <Reveal key={theme.id} delay={idx * 0.04}>
              <article id={theme.id} className="left-accent space-y-4 px-4 py-6 md:px-6">
                <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_300px]">
                  <div>
                    <h2 data-i18n={`content.research.${theme.id}.title`} className="font-display text-3xl text-ink">
                      {theme.title}
                    </h2>
                    <p data-i18n={`content.research.${theme.id}.summary`} className="mt-2 text-sm leading-relaxed text-muted md:text-base">
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

                  <div className="space-y-4">
                    <div>
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
                    </div>
                    <div>
                      <h3 data-i18n="research.applications" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
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
                </div>

                {theme.relatedProjectIds?.length ? (
                  <div className="rounded-xl bg-accentSoft/40 p-3">
                    <h3 data-i18n="research.related_projects" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      Related projects
                    </h3>
                    <div className="mt-2 grid gap-2 md:grid-cols-2">
                      {theme.relatedProjectIds
                        .flatMap((projectId) => {
                          const project = projectsById.get(projectId);
                          return project ? [project] : [];
                        })
                        .map((project) => (
                          <Link
                            key={project.id}
                            href={`/portfolio#project-${project.id}`}
                            className="rounded-lg border border-line/70 bg-white px-3 py-2 transition-colors hover:border-accent/45"
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
        </div>
      </section>
    </Container>
  );
}
