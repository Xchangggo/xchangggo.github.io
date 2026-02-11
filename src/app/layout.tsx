import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { I18nRuntime } from "@/components/i18n/I18nRuntime";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { siteProfile } from "@/content/site";

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: `${siteProfile.name} | Academic Homepage`,
  description: siteProfile.tagline,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${siteProfile.name} | Academic Homepage`,
    description: siteProfile.tagline,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <Script id="lang-init" strategy="beforeInteractive">
          {`(function(){try{var key='site_lang';var lang=localStorage.getItem(key);if(lang!=='en'&&lang!=='zh'){lang='zh';localStorage.setItem(key,lang);}document.documentElement.lang=(lang==='en'?'en':'zh-CN');}catch(e){}})();`}
        </Script>
        <a
          href="#main-content"
          data-i18n="layout.skip_to_content"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to main content
        </a>
        <div className="site-background" aria-hidden />
        <div className="relative z-10">
          <I18nRuntime />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
