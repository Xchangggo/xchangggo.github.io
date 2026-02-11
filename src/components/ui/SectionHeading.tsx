import clsx from "clsx";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  titleKey?: string;
  eyebrowKey?: string;
  descriptionKey?: string;
};

export function SectionHeading({ title, eyebrow, description, className, titleKey, eyebrowKey, descriptionKey }: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-3xl space-y-4", className)}>
      {eyebrow ? (
        <p data-i18n={eyebrowKey} className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 data-i18n={titleKey} className="font-display text-3xl leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p data-i18n={descriptionKey} className="text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
