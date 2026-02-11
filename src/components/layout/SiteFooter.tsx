import { siteProfile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-6">
      <div className="mx-auto max-w-6xl px-5 text-sm text-muted md:px-8">
        <p>
          © {new Date().getFullYear()} {siteProfile.name}. <span data-i18n="footer.copy">Simple academic portfolio.</span>
        </p>
      </div>
    </footer>
  );
}
