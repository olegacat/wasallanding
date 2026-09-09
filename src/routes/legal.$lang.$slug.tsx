import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import { DOCS, type Lang } from "@/lib/legal-content";
import { LegalDocLayout } from "@/components/legal-doc";

function isLang(v: string): v is Lang {
  return v === "en" || v === "ar";
}

export const Route = createFileRoute("/legal/$lang/$slug")({
  loader: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
    const doc = DOCS[params.lang][params.slug];
    if (!doc) throw notFound();
    return { lang: params.lang, doc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Wasal" }, { name: "robots", content: "noindex" }] };
    }
    const { doc, lang } = loaderData;
    const title = `${doc.title} — Wasal`;
    return {
      meta: [
        { title },
        { name: "description", content: doc.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: doc.summary },
        { property: "og:url", content: `/legal/${lang}/${doc.slug}` },
      ],
      links: [{ rel: "canonical", href: `/legal/${lang}/${doc.slug}` }],
    };
  },
  component: LegalDocPage,
  notFoundComponent: LegalNotFound,
  errorComponent: LegalError,
});

function LegalDocPage() {
  const { lang, doc } = Route.useLoaderData();
  return <LegalDocLayout lang={lang} doc={doc} />;
}

function LegalNotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 pt-20 pb-8 text-center">
        <h1 className="font-display text-5xl text-plum">Document not found</h1>
        <p className="mt-4 text-muted-foreground">This legal document doesn't exist. Browse all documents on the Legal hub.</p>
        <Link to="/legal" className="btn-primary mt-8 inline-flex">Back to Legal</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function LegalError({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 pt-20 pb-8 text-center">
        <h1 className="font-display text-5xl text-plum">This page didn't load</h1>
        <button onClick={reset} className="btn-primary mt-8">Try again</button>
      </main>
      <SiteFooter />
    </div>
  );
}
