import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/content/projects";
import { education } from "@/content/education";
import { awards, researchExperience, skillGroups } from "@/content/cv";

export default function PortfolioPage() {
  return (
    <Container className="space-y-12 py-10 md:space-y-14 md:py-16">
      <PageIntro
        eyebrow="Portfolio"
        title="Projects and CV Snapshot"
        description="A practical portfolio view that combines project outputs with concise CV sections for quick review."
        eyebrowKey="portfolio.eyebrow"
        titleKey="portfolio.title"
        descriptionKey="portfolio.description"
      />

      <section id="projects" className="space-y-6">
        <h2 data-i18n="projects.title" className="font-display text-3xl text-ink">
          Applied research and engineering
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.03}>
              <article id={`project-${project.id}`} className="h-full rounded-2xl border border-line/70 bg-paper p-6 shadow-card">
                <div className="flex items-start justify-between gap-3">
                  <h3 data-i18n={`content.projects.${project.id}.title`} className="font-display text-2xl text-ink">
                    {project.title}
                  </h3>
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
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="cv" className="space-y-6 border-t border-line/70 pt-8">
        <h2 data-i18n="cv.title" className="font-display text-3xl text-ink">
          Academic CV
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <article className="rounded-xl border border-line/70 bg-paper p-5">
              <h3 data-i18n="cv.education" className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Education
              </h3>
              <ul className="mt-3 space-y-3">
                {education.map((entry) => (
                  <li key={entry.id}>
                    <p data-i18n={`content.education.${entry.id}.degree`} className="font-semibold text-ink">
                      {entry.degree}
                    </p>
                    <p className="text-sm text-muted">
                      <span data-i18n={`content.education.${entry.id}.institution`}>{entry.institution}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-line/70 bg-paper p-5">
              <h3 data-i18n="cv.research_experience" className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Research experience
              </h3>
              <ul className="mt-3 space-y-3">
                {researchExperience.map((entry) => (
                  <li key={entry.id}>
                    <p data-i18n={`content.cv.researchExperience.${entry.id}.role`} className="font-semibold text-ink">
                      {entry.role}
                    </p>
                    <p data-i18n={`content.cv.researchExperience.${entry.id}.period`} className="text-sm text-muted">
                      {entry.period}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="space-y-6">
            <article className="rounded-xl border border-line/70 bg-paper p-5">
              <h3 data-i18n="cv.technical_skills" className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Technical skills
              </h3>
              <ul className="mt-3 space-y-2">
                {skillGroups.map((group, groupIdx) => (
                  <li key={group.name} className="text-sm text-muted">
                    <span data-i18n={`content.cv.skillGroups.${groupIdx}.name`} className="font-semibold text-ink">
                      {group.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-line/70 bg-paper p-5">
              <h3 data-i18n="cv.awards" className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Awards
              </h3>
              <ul className="mt-3 space-y-2">
                {awards.map((award, awardIdx) => (
                  <li key={award.title}>
                    <p data-i18n={`content.cv.awards.${awardIdx}.title`} className="font-semibold text-ink">
                      {award.title}
                    </p>
                    <p data-i18n={`content.cv.awards.${awardIdx}.date`} className="text-sm text-muted">
                      {award.date}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </Container>
  );
}
