import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-layout";

export const Route = createFileRoute("/support")({
  component: Support,
  head: () => ({
    meta: [
      { title: "Support — Wasal" },
      { name: "description", content: "Get help with your Wasal account — password resets, account deletion, billing, reporting content, and bug reports." },
      { property: "og:title", content: "Support — Wasal" },
      { property: "og:description", content: "Help and contact channels for Wasal." },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
});

const CONTACTS = [
  { label: "General support", email: "support@wasal.me", note: "App issues, questions, feedback." },
  { label: "Privacy and data requests", email: "privacy@wasal.me", note: "Deletion, access, correction, portability." },
  { label: "Report content or a user", email: "report@wasal.me", note: "For anything that breaks the Community Guidelines." },
  { label: "Appeals", email: "appeals@wasal.me", note: "If you disagree with a moderation decision." },
  { label: "General company", email: "hello@wasal.me", note: "Everything else — partnerships, press, hello." },
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "I forgot my password. How do I reset it?",
    a: <>Wasal signs you in with your phone number, so there's no password to reset. Open the app, tap Sign in, enter your phone number, and confirm the SMS code. If you no longer have access to that number, email <a className="text-plum underline" href="mailto:support@wasal.me">support@wasal.me</a>.</>,
  },
  {
    q: "How do I delete my account?",
    a: <>Follow the step-by-step instructions on our <Link to="/legal/$lang/$slug" params={{ lang: "en", slug: "account-deletion" }} className="text-plum underline">Account Deletion page</Link>. You can also request deletion by email from the address on your account.</>,
  },
  {
    q: "I have a billing or subscription problem.",
    a: <>Subscriptions are billed through the Apple App Store or Google Play. Manage renewals and refunds from your device's subscription settings. If you still need help, email <a className="text-plum underline" href="mailto:support@wasal.me">support@wasal.me</a>.</>,
  },
  {
    q: "How do I report inappropriate content or a user?",
    a: <>Inside the app, tap the ⋯ menu on any post or profile and choose Report. You can also email <a className="text-plum underline" href="mailto:report@wasal.me">report@wasal.me</a>. Full process on our <Link to="/legal/$lang/$slug" params={{ lang: "en", slug: "content-moderation" }} className="text-plum underline">Content Moderation policy</Link>.</>,
  },
  {
    q: "I found a bug. How do I report it?",
    a: <>Email <a className="text-plum underline" href="mailto:support@wasal.me">support@wasal.me</a> with a short description, the phone model and OS version, and a screenshot or screen recording if you have one.</>,
  },
];

function Support() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pt-16 pb-8">
        <nav aria-label="Breadcrumb" className="text-sm text-plum/70">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-plum">Home</Link></li>
            <li aria-hidden>›</li>
            <li className="text-plum" aria-current="page">Support</li>
          </ol>
        </nav>

        <h1 className="mt-6 font-display text-6xl md:text-7xl text-plum">Support</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Get help with your account or reach the right person on the Wasal team.
        </p>

        {/* Contact table */}
        <section aria-labelledby="contact" className="mt-14">
          <h2 id="contact" className="font-display text-3xl text-plum">Contact</h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-cream/70 text-plum">
                <tr>
                  <th className="px-5 py-3 font-semibold">Reason</th>
                  <th className="px-5 py-3 font-semibold">Email</th>
                  <th className="px-5 py-3 font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {CONTACTS.map((c) => (
                  <tr key={c.email} className="border-t border-border align-top">
                    <td className="px-5 py-4 text-plum font-medium">{c.label}</td>
                    <td className="px-5 py-4"><a href={`mailto:${c.email}`} className="text-plum underline">{c.email}</a></td>
                    <td className="px-5 py-4 text-muted-foreground hidden md:table-cell">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" className="mt-16">
          <h2 id="faq" className="font-display text-3xl text-plum">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border rounded-3xl border border-border">
            {FAQS.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-plum font-medium">
                  <span>{f.q}</span>
                  <span aria-hidden className="text-plum/50 group-open:rotate-45 transition">+</span>
                </summary>
                <div className="mt-3 text-foreground/85 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-14 rounded-4xl bg-plum text-cream p-8">
          <div className="font-display text-2xl">Still stuck?</div>
          <p className="mt-2 text-cream/70 max-w-md">Email <a className="underline text-blush" href="mailto:support@wasal.me">support@wasal.me</a> — a real human replies, usually within a day.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
