import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/education";
import { publications } from "@/content/publications";
import { researchThemes } from "@/content/research";
import { siteProfile } from "@/content/site";

export default function AboutPage() {
  const latestPublication = publications[0];

  return (
    <Container className="space-y-16 py-10 md:space-y-20 md:py-16">
      <PageIntro
        eyebrow="About"
        title="Academic profile"
        description="Training in applied statistics and biology, focused on bioinformatics, CNV detection, and clinical-oriented genomic analysis."
        eyebrowKey="about.eyebrow"
        titleKey="about.title"
        descriptionKey="about.description"
      />

      <section className="space-y-6">
        <SectionHeading title="Bio" titleKey="about.bio" />
        <Reveal>
          <div className="max-w-4xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>
              {siteProfile.name} is a bioinformatics researcher working at the intersection of mathematics and life science. Current work focuses on
              copy number variation detection, single-cell sequencing analysis, and robust algorithm design for genomic data.
            </p>
            <p>
              He received an MSc in Biology from Southern Medical University and a BSc in Applied Statistics from Northeastern University, building a
              strong foundation in statistics, modeling, and data analysis for biomedical research.
            </p>
            {latestPublication ? (
              <p>
                Recent publication activity includes the manuscript <em>{latestPublication.title}</em> submitted to {latestPublication.venue}. Work
                also includes participation in related invention patent applications.
              </p>
            ) : null}
          </div>
        </Reveal>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Research interests" titleKey="about.research_interests" />
        <div className="grid gap-4 md:grid-cols-2">
          {researchThemes.map((theme, idx) => (
            <Reveal key={theme.id} delay={idx * 0.05}>
              <article className="h-full rounded-xl border border-line/70 bg-paper/85 p-5">
                <h3 className="font-display text-2xl text-ink">{theme.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{theme.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-6 pb-4">
        <SectionHeading title="Education timeline" titleKey="about.education_timeline" />
        <ol className="space-y-4">
          {education.map((entry, idx) => (
            <Reveal key={entry.id} delay={idx * 0.05}>
              <li className="rounded-xl border border-line/70 bg-paper/85 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {entry.startDate} - {entry.endDate}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink">{entry.degree}</h3>
                <p className="text-sm text-muted">
                  {entry.institution} | {entry.location}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </Container>
  );
}
