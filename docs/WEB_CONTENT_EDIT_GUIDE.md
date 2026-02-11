# Web Content Edit Guide

This file lists the primary places to edit website content quickly.

## 1) Core Profile And Navigation

- `src/content/site.ts`
  - Name, title, intro, location, email, nav labels.

## 2) Timeline / News

- `src/content/news.ts`
  - Chronological events (`date`, `title`, `description`).

## 3) Research / Projects / CV Data

- `src/content/research.ts`
- `src/content/projects.ts`
- `src/content/education.ts`
- `src/content/cv.ts`
- `src/content/publications.ts`

## 4) Social Links

- `src/content/social.ts`
  - GitHub / ORCID / Email links.

## 5) UI Text + Bilingual Mapping

- `src/lib/i18n.ts`
  - `zh` and `en` dictionary.
  - Keys starting with `content.*` map data-level strings.
  - Keys like `home.*`, `nav.*`, `about.*` map UI-level strings.

## 6) What To Change For Your Common Updates

- Paper status/date update:
  - `src/content/news.ts`
  - `src/content/publications.ts`
  - Related bilingual keys in `src/lib/i18n.ts`

- GitHub link update:
  - `src/content/social.ts`
  - Optional bilingual label/icon keys in `src/lib/i18n.ts`

- Homepage photo:
  - File: `public/xumengchang.jpg`
  - Render location: `src/app/page.tsx`

## 7) Local Validation

- `npm run typecheck`
- `npm run lint`
- `npm run build`

