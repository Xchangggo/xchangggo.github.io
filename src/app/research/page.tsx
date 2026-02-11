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
    <Container className="space-y-16 py-10 md:py-16">
      <PageIntro
        eyebrow="Research"
        title="Themes and directions"
        description="Current work centers on CNV detection algorithms, probabilistic genomic modeling, and translation of bioinformatics methods into precision medicine workflows."
        eyebrowKey="research.eyebrow"
        titleKey="research.title"
        descriptionKey="research.description"
      />

      <div className="grid gap-5">
        {researchThemes.map((theme, idx) => (
          <Reveal key={theme.id} delay={idx * 0.04}>
            <article id={theme.id} className="rounded-2xl border border-line/70 bg-paper/90 p-6 shadow-card md:p-8">
              <h2 data-i18n={`content.research.${theme.id}.title`} className="font-display text-3xl text-ink">
                {theme.title}
              </h2>
              <p data-i18n={`content.research.${theme.id}.summary`} className="mt-4 max-w-4xl text-base leading-relaxed text-muted md:text-lg">
                {theme.summary}
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div>
                  <h3 data-i18n="research.keywords" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Keywords</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {theme.keywords.map((item, itemIdx) => (
                      <Tag key={item} data-i18n={`content.research.${theme.id}.keywords.${itemIdx}`} className="keyword-tag">
                        {item}
                      </Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 data-i18n="research.methods" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Methods</h3>
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {theme.methods.map((item, itemIdx) => (
                      <li key={item} data-i18n={`content.research.${theme.id}.methods.${itemIdx}`}>
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 data-i18n="research.applications" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Applications</h3>
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {theme.applications.map((item, itemIdx) => (
                      <li key={item} data-i18n={`content.research.${theme.id}.applications.${itemIdx}`}>
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {theme.relatedProjectIds?.length ? (
                <div className="mt-7 border-t border-line/70 pt-5">
                  <h3 data-i18n="research.related_projects" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Related projects
                  </h3>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {theme.relatedProjectIds
                      .flatMap((projectId) => {
                        const project = projectsById.get(projectId);
                        return project ? [project] : [];
                      })
                      .map((project) => (
                        <Link
                          key={project.id}
                          href={`/projects#${project.id}`}
                          className="rounded-lg border border-line/70 bg-paper/80 p-3 transition-colors hover:border-accent/40"
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

      <Reveal>
        <section className="rounded-xl border border-dashed border-line bg-paper/75 p-6">
          <h2 data-i18n="research.refs_title" className="font-display text-2xl text-ink">Publication and CV references</h2>
          <p data-i18n="research.refs_desc" className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            The research section is backed by structured content with publication mappings, making it easy to expand into dedicated publication pages and
            maintain consistency across CV and project sections.
          </p>
          <Link href="/cv" data-i18n="research.refs_link" className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline">
            See current CV entries
          </Link>
        </section>
      </Reveal>
    </Container>
  );
}
