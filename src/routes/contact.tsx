import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-layout";
import sloganBanner from "@/assets/slogan-banner.webp.asset.json";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Wasal" },
      { name: "description", content: "Get in touch with the Wasal team — press, partnerships, support, and community." },
      { property: "og:title", content: "Contact — Wasal" },
      { property: "og:description", content: "Get in touch with the Wasal team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const channels = [
    { t: "General", e: "hello@wasal.me", d: "Anything else on your mind." },
    { t: "Support", e: "support@wasal.me", d: "Trouble with the app? We usually reply within a day." },
    { t: "Privacy", e: "privacy@wasal.me", d: "Data requests, deletions, and questions about our Privacy Policy." },
    { t: "Legal", e: "legal@wasal.me", d: "IP notices and legal correspondence." },
    { t: "Press", e: "press@wasal.me", d: "Media, interviews, and brand assets." },
    { t: "Partnerships", e: "partners@wasal.me", d: "Mosques, councils, and neighborhood organizations." },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pt-20 pb-8">
        <div className="chip">Contact</div>
        <h1 className="mt-4 font-display text-6xl md:text-7xl text-plum">Say salaam.</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          We're a small team building Wasal in public. Pick the door that fits and we'll open it.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {channels.map((c) => (
            <a
              key={c.e}
              href={`mailto:${c.e}`}
              className="rounded-3xl bg-card border border-border p-6 hover:border-plum transition group"
            >
              <div className="font-display text-2xl text-plum">{c.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
              <div className="mt-4 text-plum font-medium group-hover:underline">{c.e} →</div>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-4xl bg-plum text-cream p-10">
          <div className="font-display text-3xl">Wasal HQ</div>
          <p className="mt-2 text-cream/70 max-w-md">
            We are based in Doha, Qatar. If you're building for the neighborhood, we'd love to hear from you.
          </p>
        </div>

        <div className="mt-10 rounded-4xl bg-olive overflow-hidden shadow-sm">
          <img
            src={sloganBanner.url}
            alt="Connection not just a contact — وصال .. مش اتصال"
            width="1920"
            height="1076"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
