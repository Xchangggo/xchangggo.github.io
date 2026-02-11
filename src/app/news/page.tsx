import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/motion/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { news } from "@/content/news";
import { formatMonth } from "@/lib/format";

export default function NewsPage() {
  const groupedByYear = news.reduce<Record<string, typeof news>>((acc, item) => {
    const year = item.date.split("-")[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  const yearGroups = Object.entries(groupedByYear).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));

  const formatMonthOnly = (value: string) => {
    const [year, month] = value.split("-");
    const date = new Date(Number(year), Number(month) - 1, 1);
    return date.toLocaleDateString("en-US", { month: "short" });
  };

  return (
    <Container className="space-y-16 py-10 md:py-16">
      <PageIntro
        eyebrow="News"
        title="Chronological updates"
        description="Academic milestones, project updates, and recent achievements."
        eyebrowKey="news.eyebrow"
        titleKey="news.title"
        descriptionKey="news.description"
      />

      <section className="space-y-10 pb-4">
        {yearGroups.map(([year, items], yearIdx) => (
          <Reveal key={year} delay={yearIdx * 0.04}>
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-ink md:text-3xl">{year}</h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <article key={`${item.date}-${item.title}`} className="grid grid-cols-[76px_minmax(0,1fr)] gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
                    <p className="pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {formatMonthOnly(item.date)}
                    </p>
                    <div className="relative rounded-xl border border-line/70 bg-paper/90 p-5 shadow-card">
                      <span className="absolute -left-2.5 top-6 h-2.5 w-2.5 rounded-full border border-accent bg-paper" aria-hidden />
                      <span className="absolute -left-[1px] top-0 h-full w-px bg-line/80" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{formatMonth(item.date)}</p>
                      <h3 data-i18n={`content.news.${item.date}.title`} className="mt-2 font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p data-i18n={`content.news.${item.date}.description`} className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          data-i18n="news.learn_more"
                          className="mt-3 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
                        >
                          Learn more
                        </Link>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </Container>
  );
}
