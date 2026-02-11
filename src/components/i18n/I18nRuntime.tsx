"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { applyLanguage, getSavedLanguage, setSavedLanguage } from "@/lib/i18n";

export function I18nRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = getSavedLanguage();
    setSavedLanguage(lang);

    const apply = () => applyLanguage(lang);
    apply();
    requestAnimationFrame(apply);
  }, [pathname]);

  return null;
}
