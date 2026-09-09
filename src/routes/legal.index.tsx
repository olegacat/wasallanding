import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import { DOC_INDEX_EN, DOC_INDEX_AR } from "@/lib/legal-content";

export const Route = createFileRoute("/legal/")({
  component: LegalHub,
  head: () => ({
    meta: [
      { title: "Legal — Wasal" },
      { name: "description", content: "Wasal's legal documents in English and Arabic — privacy, terms, community guidelines, account deletion, legal notice, and content moderation policy." },
      { property: "og:title", content: "Legal — Wasal" },
      { property: "og:description", content: "Wasal legal documents in English and Arabic." },
      { property: "og:url", content: "/legal" },
    ],
    links: [{ rel: "canonical", href: "/legal" }],
  }),
});

function LegalHub() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pt-16 pb-8">
        <nav aria-label="Breadcrumb" className="text-sm text-plum/70">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-plum">Home</Link></li>
            <li aria-hidden>›</li>
            <li className="text-plum" aria-current="page">Legal</li>
          </ol>
        </nav>

        <h1 className="mt-6 font-display text-6xl md:text-7xl text-plum">Legal</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Every Wasal legal document lives here, in English and Arabic, with the
          same routing and labels used across the site. The Privacy Policy, Terms
          of Service, Cookie Policy, and Legal Notice are in effect; remaining
          documents are being finalized with counsel. For help, see{" "}
          <Link to="/support" className="text-plum underline">Support</Link>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("wasal:open-cookie-preferences"))}
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-plum hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-plum"
          >
            Manage cookie preferences
          </button>
          <Link
            to="/support"
            className="rounded-full border border-plum/20 px-5 py-2.5 text-sm font-semibold text-plum hover:bg-plum hover:text-cream transition"
          >
            Support &amp; contact
          </Link>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <section aria-labelledby="lang-en">
            <h2 id="lang-en" className="font-display text-3xl text-plum">English</h2>
            <ul className="mt-4 space-y-3">
              {DOC_INDEX_EN.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/legal/$lang/$slug"
                    params={{ lang: "en", slug: d.slug }}
                    className="block rounded-2xl border border-border p-4 hover:border-plum transition"
                  >
                    <div className="font-display text-xl text-plum">{d.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{d.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="lang-ar" dir="rtl" lang="ar">
            <h2 id="lang-ar" className="font-display text-3xl text-plum">العربية</h2>
            <ul className="mt-4 space-y-3">
              {DOC_INDEX_AR.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/legal/$lang/$slug"
                    params={{ lang: "ar", slug: d.slug }}
                    className="block rounded-2xl border border-border p-4 hover:border-plum transition"
                  >
                    <div className="font-display text-xl text-plum">{d.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{d.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
