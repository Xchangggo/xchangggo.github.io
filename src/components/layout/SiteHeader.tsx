"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { navLinks, siteProfile } from "@/content/site";
import { applyLanguage, getSavedLanguage, setSavedLanguage, toggleLanguage, type SupportedLanguage } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const [lang, setLang] = useState<SupportedLanguage>("zh");

  useEffect(() => {
    const initial = getSavedLanguage();
    setLang(initial);
    applyLanguage(initial);
  }, [pathname]);

  const onToggleLanguage = () => {
    const nextLang = toggleLanguage(lang);
    setLang(nextLang);
    setSavedLanguage(nextLang);
    applyLanguage(nextLang);
  };

  const navKeyByHref: Record<string, string> = {
    "/": "nav.home",
    "/research": "nav.research",
    "/portfolio": "nav.portfolio",
    "/projects": "nav.projects",
    "/cv": "nav.cv",
    "/news": "nav.news",
    "/contact": "nav.contact"
  };

  return (
    <header className="frosted-nav sticky top-0 z-40 border-b border-line/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8">
        <Link href="/" className="inline-flex flex-col leading-none" data-i18n-aria-label="header.home_aria" aria-label="Go to homepage">
          <span data-i18n="header.brand_name" className="font-display text-2xl text-white">{siteProfile.name}</span>
          <span data-i18n="header.brand_subtitle" className="text-sm text-white/80">{siteProfile.bilingualName}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-i18n={navKeyByHref[link.href] ?? undefined}
                    className={clsx(
                      "rounded-md px-2 py-1 text-lg font-semibold transition-colors",
                      active ? "bg-white/20 text-white" : "text-white/85 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav aria-label="Mobile navigation" className="md:hidden">
          <ul className="scrollbar-none flex gap-2 overflow-x-auto">
            {navLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    data-i18n={navKeyByHref[link.href] ?? undefined}
                    className={clsx(
                      "block rounded-md border border-white/30 px-3 py-1.5 text-base font-medium",
                      active ? "bg-white/20 text-white" : "text-white/85"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          data-lang-toggle
          data-lang={lang}
          data-i18n-aria-label="lang.toggle_aria"
          className="lang-switch relative inline-flex h-8 w-[78px] items-center rounded-full border border-white/35 bg-white/12 px-1 text-[11px] font-semibold text-white transition-colors hover:border-white/55"
          onClick={onToggleLanguage}
          aria-label="Switch language"
        >
          <span className="lang-switch__label">中</span>
          <span className="lang-switch__label">EN</span>
          <span className="lang-switch__thumb" aria-hidden />
        </button>
      </div>
    </header>
  );
}
