import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import type { LegalDoc, Lang } from "@/lib/legal-content";

interface Props {
  lang: Lang;
  doc: LegalDoc;
}

const T = {
  en: {
    home: "Home",
    legal: "Legal",
    updated: "Last updated",
    effective: "Effective",
    onThisPage: "On this page",
    summaryTitle: "Plain-language summary",
    summaryDisclaimer: "This summary is not legally binding; the full text below is.",
    contact: "Contact",
    switchTo: "العربية",
    backToTop: "Back to top",
    dir: "ltr" as const,
  },
  ar: {
    home: "الرئيسية",
    legal: "الشؤون القانونية",
    updated: "آخر تحديث",
    effective: "تاريخ النفاذ",
    onThisPage: "في هذه الصفحة",
    summaryTitle: "ملخّص بلغة مبسّطة",
    summaryDisclaimer: "هذا الملخّص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
    contact: "التواصل",
    switchTo: "English",
    backToTop: "العودة إلى الأعلى",
    dir: "rtl" as const,
  },
};

export function LegalDocLayout({ lang, doc }: Props) {
  const t = T[lang];
  const other: Lang = lang === "en" ? "ar" : "en";

  return (
    <div className="min-h-screen" dir={t.dir} lang={lang}>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pt-10 pb-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-plum/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-plum">{t.home}</Link></li>
            <li aria-hidden>›</li>
            <li><Link to="/legal" className="hover:text-plum">{t.legal}</Link></li>
            <li aria-hidden>›</li>
            <li className="text-plum" aria-current="page">{doc.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mt-6 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-display text-5xl md:text-6xl text-plum">{doc.title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {doc.effective ? <>{t.effective}: {doc.effective} · </> : null}
              {t.updated}: {doc.updated}
            </p>
          </div>
          <Link
            to="/legal/$lang/$slug"
            params={{ lang: other, slug: doc.slug }}
            className="text-sm rounded-full border border-plum/20 px-4 py-2 text-plum hover:bg-plum hover:text-cream transition"
          >
            {t.switchTo}
          </Link>
        </div>

        {/* Summary callout */}
        <aside
          aria-label={t.summaryTitle}
          className="mt-8 rounded-3xl border border-teal/40 bg-teal/10 p-6"
        >
          <div className="text-xs uppercase tracking-widest text-plum/70 font-semibold">
            {t.summaryTitle}
          </div>
          <p className="mt-2 text-plum/90 leading-relaxed">{doc.summary}</p>
          <p className="mt-3 text-xs text-plum/60 italic">{t.summaryDisclaimer}</p>
        </aside>

        {/* Table of contents */}
        <nav aria-label={t.onThisPage} className="mt-8 rounded-3xl bg-cream/60 border border-border p-6">
          <div className="text-xs uppercase tracking-widest text-plum/70 font-semibold mb-3">
            {t.onThisPage}
          </div>
          <ol className="space-y-2 text-sm">
            {doc.sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-plum hover:underline">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <article className="mt-12 space-y-10 text-foreground/85 leading-relaxed">
          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-display text-3xl text-plum">
                {i + 1}. {s.heading}
              </h2>
              <div className="mt-4 space-y-3">
                {s.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          {/* Contact */}
          <section id="doc-contact" className="scroll-mt-24">
            <h2 className="font-display text-3xl text-plum">{t.contact}</h2>
            <ul className="mt-4 space-y-2">
              {doc.contacts.map((c) => (
                <li key={c.email}>
                  <span className="text-plum/70">{c.label}: </span>
                  <a href={`mailto:${c.email}`} className="text-plum underline">{c.email}</a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* Repeat "last updated" at bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>{t.updated}: {doc.updated}</div>
          <a href="#top" className="text-plum hover:underline">↑ {t.backToTop}</a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
