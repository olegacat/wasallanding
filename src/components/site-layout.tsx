import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import wasalLogo from "@/assets/logo.svg";
import { DOC_INDEX_AR, DOC_INDEX_EN } from "@/lib/legal-content";
import { useLanguage } from "@/lib/language";
import { copyFor } from "@/lib/copy";

/** The Wasal wordmark from `src/assets/logo.svg`. */
export function WasalMark({
  className = "h-7 w-auto",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const { lang } = useLanguage();

  return (
    <img
      src={wasalLogo}
      alt={lang === "ar" ? "وصال" : "Wasal"}
      className={`${className} ${invert ? "[filter:brightness(0)_invert(1)]" : ""}`}
    />
  );
}


export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full border border-plum/15 bg-cream text-plum text-sm font-medium hover:bg-plum/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 ${className}`}
      aria-label={lang === "ar" ? "Switch site language to English" : "تغيير لغة الموقع إلى العربية"}
      lang={lang === "ar" ? "en" : "ar"}
    >
      {lang === "ar" ? "English" : <span className="slogan-ar text-[15px]">العربية</span>}
    </button>
  );
}

type NavItem = { label: string; labelAr: string; href?: string; to?: string; hash?: string };

// Single source of truth for footer legal labels — mirrors DOC_INDEX_EN order.
const LEGAL_LINKS = DOC_INDEX_EN.map((d) => ({ slug: d.slug, label: d.title }));
const LEGAL_LINKS_AR = DOC_INDEX_AR.map((d) => ({ slug: d.slug, label: d.title }));

const NAV_ITEMS: NavItem[] = [
  { label: "How it works", labelAr: "كيف يعمل", href: "/#how", hash: "how" },
  { label: "The feed", labelAr: "التغذية", href: "/#feed", hash: "feed" },
  { label: "FAQ", labelAr: "الأسئلة", href: "/#faq", hash: "faq" },
  { label: "Legal", labelAr: "القانوني", to: "/legal" },
  { label: "Support", labelAr: "الدعم", to: "/support" },
  { label: "Contact", labelAr: "تواصل", to: "/contact" },
];


function useActiveSection(hashes: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }
    const elements = hashes
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, hashes.join(",")]);

  return { active, pathname };
}

export function SiteHeader() {
  const hashes = NAV_ITEMS.filter((i) => i.hash).map((i) => i.hash!);
  const { active, pathname } = useActiveSection(hashes);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const labelOf = (item: NavItem) => (isAr ? item.labelAr : item.label);
  const arType = isAr ? "slogan-ar" : "";

  const isActive = (item: NavItem) => {
    if (item.to) return pathname === item.to;
    if (item.hash) return pathname === "/" && active === item.hash;
    return false;
  };

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close on route/hash change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, active]);

  const linkBase =
    "relative font-display text-[17px] leading-none tracking-[-0.005em] px-3.5 py-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60";

  const renderDesktopItem = (item: NavItem) => {
    const activeItem = isActive(item);
    const cls = `${linkBase} ${
      activeItem ? "text-plum bg-teal/15" : "text-plum/70 hover:text-plum hover:bg-plum/5"
    }`;
    const inner = (
      <>
        <span className={arType}>{labelOf(item)}</span>
        <span
          aria-hidden
          className={`pointer-events-none absolute left-3.5 right-3.5 -bottom-[3px] h-[2px] rounded-full bg-teal origin-left transition-transform duration-300 motion-reduce:transition-none ${
            activeItem ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </>
    );
    return item.to ? (
      <Link key={item.label} to={item.to} className={cls} aria-current={activeItem ? "page" : undefined}>
        {inner}
      </Link>
    ) : (
      <a key={item.label} href={item.href} className={cls} aria-current={activeItem ? "true" : undefined}>
        {inner}
      </a>
    );
  };

  const renderMobileItem = (item: NavItem) => {
    const activeItem = isActive(item);
    const cls = `flex items-center justify-between font-display text-2xl tracking-tight px-5 py-4 rounded-2xl transition-colors ${
      activeItem
        ? "bg-teal/20 text-plum"
        : "text-plum/85 hover:bg-plum/5 active:bg-plum/10"
    }`;
    const dot = (
      <span
        aria-hidden
        className={`h-2.5 w-2.5 rounded-full ${activeItem ? "bg-teal" : "bg-transparent"}`}
      />
    );
    return item.to ? (
      <Link
        key={item.label}
        to={item.to}
        className={cls}
        aria-current={activeItem ? "page" : undefined}
        onClick={() => setMobileOpen(false)}
      >
        <span className={arType}>{labelOf(item)}</span>
        {dot}
      </Link>
    ) : (
      <a
        key={item.label}
        href={item.href}
        className={cls}
        aria-current={activeItem ? "true" : undefined}
        onClick={() => setMobileOpen(false)}
      >
        <span className={arType}>{labelOf(item)}</span>
        {dot}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-plum/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/" className="flex items-center text-plum" aria-label={isAr ? "وصال — الرئيسية" : "Wasal — home"}>
            <WasalMark className="h-8 md:h-9 w-auto" />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(renderDesktopItem)}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <a
            href="/#get"
            className={`hidden sm:inline-flex btn-primary btn-shine text-sm px-5 py-2.5 shrink-0 ${arType}`}
          >
            {isAr ? "حمّل التطبيق" : "Get the app"}
          </a>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-plum/15 bg-cream text-plum hover:bg-plum/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="wasal-mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5" aria-hidden>
              <span
                className={`absolute left-0 right-0 top-0 h-[2px] rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-[7px] h-[2px] rounded-full bg-current transition-opacity duration-200 motion-reduce:transition-none ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-[14px] h-[2px] rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="wasal-mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 motion-reduce:transition-none ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 pt-2 pb-6 flex flex-col gap-1 bg-cream/95 border-t border-plum/10">
          {NAV_ITEMS.map(renderMobileItem)}
          <div className="mt-4 px-2">
            <LanguageToggle className="w-full justify-center" />
          </div>
          <a
            href="/#get"
            onClick={() => setMobileOpen(false)}
            className={`mt-3 btn-primary btn-shine text-center text-base py-3.5 rounded-full ${arType}`}
          >
            {isAr ? "حمّل التطبيق" : "Get the app"}
          </a>
        </nav>
      </div>
    </header>

  );
}


export function SiteFooter() {
  const { lang } = useLanguage();
  const t = copyFor(lang);
  const isAr = lang === "ar";
  const arType = isAr ? "slogan-ar" : "";
  const legalLinks = isAr ? LEGAL_LINKS_AR : LEGAL_LINKS;

  return (
    <footer className={`mt-24 border-t border-border/60 bg-plum text-cream ${arType}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            {/* Invert the olive logo to cream on the plum footer */}
            <WasalMark className="h-10 w-auto opacity-90" invert />
          </div>

          <p className="mt-4 max-w-sm text-cream/70 text-sm leading-relaxed">
            {t.footerBlurb}
          </p>
          <p className="mt-4 text-xs text-cream/50">{t.footerCity}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">{t.footerProduct}</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/#how" className="hover:text-blush">{t.footerHow}</a></li>
            <li><a href="/#feed" className="hover:text-blush">{t.footerFeed}</a></li>
            <li><a href="/#get" className="hover:text-blush">{t.footerDownload}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">{t.footerLegal}</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/legal" className="hover:text-blush">{t.footerLegalHub}</Link></li>
            {legalLinks.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/legal/$lang/$slug"
                  params={{ lang, slug: l.slug }}
                  className="hover:text-blush"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("wasal:open-cookie-preferences"))}
                className="hover:text-blush focus:outline-none focus-visible:underline"
              >
                {t.footerCookies}
              </button>
            </li>
            <li><Link to="/support" className="hover:text-blush">{t.footerSupport}</Link></li>
            <li><Link to="/contact" className="hover:text-blush">{t.footerContact}</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {isAr ? "وصال" : "Wasal"}. {t.footerRights}
      </div>
    </footer>
  );
}

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pt-16 pb-8">
        <Link to="/" className="text-sm text-plum/70 hover:text-plum">← Back home</Link>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-plum">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        <article className="prose-wasal mt-10 space-y-6 text-foreground/85 leading-relaxed">
          {children}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
