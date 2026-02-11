import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/education";
import { projects } from "@/content/projects";
import { awards, researchExperience, skillGroups } from "@/content/cv";

export default function CvPage() {
  return (
    <Container className="space-y-16 py-10 md:py-16">
      <PageIntro
        eyebrow="Curriculum Vitae"
        title="Academic CV"
        description="Education, CNV-focused research experience, technical skills, and selected achievements."
        eyebrowKey="cv.eyebrow"
        titleKey="cv.title"
        descriptionKey="cv.description"
      />

      <Reveal>
        <Link
          href="/files/Xu_Mengchang_CV.pdf"
          target="_blank"
          data-i18n="cv.download"
          className="inline-flex rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          Download PDF CV
        </Link>
      </Reveal>

      <section className="space-y-6">
        <SectionHeading title="Education" titleKey="cv.education" />
        <div className="space-y-4">
          {education.map((entry, idx) => (
            <Reveal key={entry.id} delay={idx * 0.04}>
              <article className="rounded-xl border border-line/70 bg-paper/85 p-5">
                <h3 data-i18n={`content.education.${entry.id}.degree`} className="font-display text-2xl text-ink">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  <span data-i18n={`content.education.${entry.id}.institution`}>{entry.institution}</span> |{" "}
                  <span data-i18n={`content.education.${entry.id}.location`}>{entry.location}</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  <span data-i18n={`content.education.${entry.id}.startDate`}>{entry.startDate}</span> -{" "}
                  <span data-i18n={`content.education.${entry.id}.endDate`}>{entry.endDate}</span>
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {entry.highlights.map((item, itemIdx) => (
                    <li key={item} data-i18n={`content.education.${entry.id}.highlights.${itemIdx}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Research experience" titleKey="cv.research_experience" />
        <div className="space-y-4">
          {researchExperience.map((entry, idx) => (
            <Reveal key={entry.id} delay={idx * 0.04}>
              <article className="rounded-xl border border-line/70 bg-paper/85 p-5">
                <h3 data-i18n={`content.cv.researchExperience.${entry.id}.role`} className="font-display text-2xl text-ink">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  <span data-i18n={`content.cv.researchExperience.${entry.id}.institution`}>{entry.institution}</span> |{" "}
                  <span data-i18n={`content.cv.researchExperience.${entry.id}.location`}>{entry.location}</span>
                </p>
                <p data-i18n={`content.cv.researchExperience.${entry.id}.period`} className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {entry.period}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {entry.bullets.map((item, itemIdx) => (
                    <li key={item} data-i18n={`content.cv.researchExperience.${entry.id}.bullets.${itemIdx}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Selected projects" titleKey="cv.selected_projects" />
        <div className="space-y-3">
          {projects.slice(0, 6).map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.03}>
              <article className="rounded-xl border border-line/70 bg-paper/85 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 data-i18n={`content.projects.${project.id}.title`} className="font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p data-i18n={`content.projects.${project.id}.period`} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {project.period}
                  </p>
                </div>
                <p data-i18n={`content.projects.${project.id}.summary`} className="mt-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-8 pb-4 md:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading title="Technical skills" titleKey="cv.technical_skills" />
          <div className="space-y-3">
            {skillGroups.map((group, groupIdx) => (
              <article key={group.name} className="rounded-xl border border-line/70 bg-paper/85 p-5">
                <h3 data-i18n={`content.cv.skillGroups.${groupIdx}.name`} className="font-semibold text-ink">
                  {group.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {group.items.map((item, itemIdx) => (
                    <span key={item}>
                      {itemIdx > 0 ? ", " : ""}
                      <span data-i18n={`content.cv.skillGroups.${groupIdx}.items.${itemIdx}`}>{item}</span>
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeading title="Awards" titleKey="cv.awards" />
          <div className="space-y-3">
            {awards.map((award, awardIdx) => (
              <article key={award.title} className="rounded-xl border border-line/70 bg-paper/85 p-5">
                <h3 data-i18n={`content.cv.awards.${awardIdx}.title`} className="font-semibold text-ink">
                  {award.title}
                </h3>
                <p data-i18n={`content.cv.awards.${awardIdx}.date`} className="mt-1 text-sm text-muted">
                  {award.date}
                </p>
                {award.note ? (
                  <p data-i18n={`content.cv.awards.${awardIdx}.note`} className="mt-2 text-sm text-muted">
                    {award.note}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
