import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import { WasalMark } from "@/components/site-layout";
import { useReveal } from "@/hooks/use-reveal";
import { Users, MessageCircle, Heart, Home, Send, MapPin, Calendar, HandHelping, MessagesSquare, Lock, ShieldCheck } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import posterNeighbors from "@/assets/poster-neighbors.jpg";
import posterStreet from "@/assets/poster-street.jpg";
import posterGather from "@/assets/poster-gather.jpg";
import ogImage from "@/assets/og-wasal.jpg";


type StepPoster = {
  image: string;
  imageAlt: string;
  bg: string;
  fg: string;
  imageRotate: string;
};

const STEP_POSTERS: StepPoster[] = [
  {
    image: posterStreet,
    imageAlt: "A neighbor greeting friends at a warm-lit doorway",
    bg: "bg-olive", fg: "text-cream", imageRotate: "-rotate-2",
  },
  {
    image: posterGather,
    imageAlt: "Neighbors sharing food together at golden hour",
    bg: "bg-plum", fg: "text-cream", imageRotate: "rotate-2",
  },
  {
    image: posterNeighbors,
    imageAlt: "A small circle of friends in conversation by the sea",
    bg: "bg-cobalt", fg: "text-cream", imageRotate: "-rotate-3",
  },
];

function StepPosterCard({
  step,
  copy,
  index,
}: {
  step: StepPoster;
  copy: { eyebrow: string; headA: string; headTag: string; body: string };
  index: number;
}) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: shown ? `${index * 120}ms` : "0ms" }}
      className={`reveal ${shown ? "reveal-in" : ""} relative rounded-[22px] overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] ${step.bg} ${step.fg} flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-0.6deg] motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0 group`}
    >
      <div className="absolute top-4 right-4 opacity-90">
        <WasalMark className="h-5 w-auto" invert />
      </div>
      <div className="relative px-5 pt-10 pb-4">
        <div className="text-[10px] uppercase tracking-[0.18em] opacity-70 mb-3">{copy.eyebrow}</div>
        <h3 className="font-display font-semibold leading-[0.95] text-[clamp(1.75rem,2.4vw,2.25rem)]">
          {copy.headA}
          <span className="poster-tag">{copy.headTag}</span>
        </h3>
        <p className="mt-3 opacity-90 text-sm leading-relaxed">{copy.body}</p>
      </div>
      <div className="relative mt-auto px-5 pb-8">
        <div className={`${step.imageRotate} group-hover:rotate-0 transition-transform duration-500 motion-reduce:!rotate-0 rounded-md overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/5`}>
          <img
            src={step.image} alt={step.imageAlt}
            width={600} height={450} loading="lazy"
            className="block w-full h-auto object-cover aspect-[4/3] select-none transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
            draggable={false}
          />
        </div>
      </div>
    </article>
  );
}



function TrustCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${index * 120}ms` : "0ms" }}
      className={`reveal ${shown ? "reveal-in" : ""} rounded-3xl bg-card border border-border p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(82,3,69,0.35)] motion-reduce:hover:translate-y-0`}
    >
      <div className="w-10 h-10 rounded-full bg-olive/20 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-olive animate-wasal-pulse-dot" />
      </div>
      <h3 className="mt-5 font-display text-2xl text-plum">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

import { SiteHeader, SiteFooter } from "@/components/site-layout";

import wasalScreen from "@/assets/screenwassal1.jpg";
import wasalFeed from "@/assets/screenwassal2.jpg";

import { useLanguage } from "@/lib/language";
import { copyFor } from "@/lib/copy";
import { subscribeLanding } from "@/lib/landing-subscribe";

// Icons + scroll targets only — labels come from the bilingual copy registry.
const RIBBON_ITEMS = [
  { icon: Users, target: "how" },
  { icon: MessagesSquare, target: "feed" },
  { icon: HandHelping, target: "trust" },
  { icon: Calendar, target: "feed" },
  { icon: Send, target: "feed" },
  { icon: MessageCircle, target: "faq" },
  { icon: Home, target: "how" },
  { icon: Heart, target: "trust" },
] as const;

// Mobile shows a focused subset with larger tap targets
const RIBBON_ITEMS_MOBILE = RIBBON_ITEMS.filter((_, i) => i < 4);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  el.classList.add("ring-4", "ring-teal", "ring-offset-2", "ring-offset-cream", "transition-shadow");
  window.setTimeout(() => {
    el.classList.remove("ring-4", "ring-teal", "ring-offset-2", "ring-offset-cream");
  }, 1600);
}

const RibbonPill = ({
  icon: Icon,
  label,
  target,
  size = "md",
  onKeyNav,
}: {
  icon: typeof Users;
  label: string;
  target: string;
  size?: "md" | "lg";
  onKeyNav?: (e: KeyboardEvent<HTMLButtonElement>) => void;
}) => {
  const pad = size === "lg" ? "px-5 py-3 text-lg" : "px-4 py-2 text-base md:text-xl";
  const iconSize = size === "lg" ? "w-6 h-6" : "w-5 h-5 md:w-6 md:h-6";
  return (
    <button
      type="button"
      onClick={() => scrollToSection(target)}
      onKeyDown={onKeyNav}
      className={`inline-flex items-center gap-2 ${pad} rounded-full bg-cream border border-plum/15 text-plum font-display italic hover:bg-blush hover:border-plum/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:border-plum transition-colors shrink-0 min-h-[44px]`}
      aria-label={label}
    >
      <Icon className={`${iconSize} text-teal`} strokeWidth={2.5} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
};

function useKeyboardRibbonNav(count: number) {
  const listRef = useRef<HTMLUListElement>(null);
  const handleKeyNav = (index: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    const key = e.key;
    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(key)) return;
    e.preventDefault();
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>("button");
    if (!buttons?.length) return;
    let next = index;
    if (key === "ArrowRight" || key === "ArrowDown") next = (index + 1) % count;
    else if (key === "ArrowLeft" || key === "ArrowUp") next = (index - 1 + count) % count;
    else if (key === "Home") next = 0;
    else if (key === "End") next = count - 1;
    buttons[next]?.focus();
  };
  return { listRef, handleKeyNav };
}

function ValuesRibbon() {
  const reduced = usePrefersReducedMotion();
  const mobileNav = useKeyboardRibbonNav(RIBBON_ITEMS_MOBILE.length);
  const fullNav = useKeyboardRibbonNav(RIBBON_ITEMS.length);
  const { lang } = useLanguage();
  const t = copyFor(lang);
  const labelAt = (i: number) => t.ribbon[i] ?? "";

  if (reduced) {
    return (
      <nav aria-label={t.ribbonAria} className="border-y border-plum/10 bg-cream/60 py-4">
        <ul
          ref={fullNav.listRef}
          role="list"
          className="mx-auto max-w-6xl px-4 md:px-6 flex flex-wrap justify-center gap-3"
        >
          {RIBBON_ITEMS.map((it, i) => (
            <li key={labelAt(i)}>
              <RibbonPill icon={it.icon} label={labelAt(i)} target={it.target} onKeyNav={fullNav.handleKeyNav(i)} />
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav
      aria-label={t.ribbonAria}
      className="relative border-y border-plum/10 bg-cream/60 py-4 overflow-hidden"
    >
      {/* Mobile: horizontal snap scroll, keyboard-navigable, no marquee */}
      <ul
        ref={mobileNav.listRef}
        role="list"
        className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {RIBBON_ITEMS_MOBILE.map((it, i) => (
          <li key={labelAt(i)} className="snap-start">
            <RibbonPill
              icon={it.icon}
              label={labelAt(i)}
              target={it.target}
              size="lg"
              onKeyNav={mobileNav.handleKeyNav(i)}
            />
          </li>
        ))}
      </ul>

      {/* Desktop: infinite marquee (decorative duplicate is aria-hidden) */}
      <ul
        role="list"
        className="hidden md:flex gap-6 whitespace-nowrap animate-wasal-marquee w-max will-change-transform"
      >
        {RIBBON_ITEMS.map((it, i) => (
          <li key={`a-${labelAt(i)}`}>
            <RibbonPill icon={it.icon} label={labelAt(i)} target={it.target} />
          </li>
        ))}
        {RIBBON_ITEMS.map((it, i) => (
          <li key={`b-${labelAt(i)}`} aria-hidden="true">
            <RibbonPill icon={it.icon} label={labelAt(i)} target={it.target} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FeedPhone() {
  const t = copyFor(useLanguage().lang);
  const { ref: parallaxRef, offset } = useParallax<HTMLDivElement>(-26);
  const { ref: stickerRef, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={parallaxRef}
      className="relative mx-auto w-full max-w-[240px] sm:max-w-[270px] md:max-w-[290px] pb-16 sm:pb-20"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="absolute -inset-8 rounded-[64px] bg-gradient-to-tr from-teal/30 via-transparent to-blush/30 blur-3xl -z-10" />
      <div className="animate-wasal-float-alt" style={{ ["--tw-rotate" as string]: "4deg" }}>
        <div className="relative rotate-[4deg] motion-reduce:rotate-0 rounded-[54px] bg-cream p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-cream/40">
          <div className="absolute left-[-3px] top-24 h-8 w-[3px] rounded-l bg-cream/80" />
          <div className="absolute left-[-3px] top-40 h-14 w-[3px] rounded-l bg-cream/80" />
          <div className="absolute left-[-3px] top-60 h-14 w-[3px] rounded-l bg-cream/80" />
          <div className="absolute right-[-3px] top-36 h-20 w-[3px] rounded-r bg-cream/80" />

          {/* Full phone aspect, top-aligned so no content is cut mid-card */}
          <div className="relative overflow-hidden rounded-[46px] bg-black aspect-[9/19.5]">
            <img
              src={wasalFeed}
              alt="Wasal app — neighborhood feed"
              className="block w-full h-full object-cover object-top select-none"
              draggable={false}
            />
            <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 h-[26px] w-[95px] rounded-full bg-black" />
          </div>
        </div>
      </div>

      {/* Social-proof sticker — sits below the phone so it never covers the screen */}
      <div
        ref={stickerRef}
        className={`sticker-peel ${shown ? "sticker-peel-in" : ""} absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-right-8 md:-right-14 select-none group cursor-pointer`}
        aria-label={`${t.stickerFeedA} ${t.stickerFeedB}`}
        role="img"
        tabIndex={0}
      >
        <div className="relative transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-2 group-active:scale-95 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0">
          <div className="bg-blush px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg whitespace-nowrap">
            <span className="font-display font-black italic tracking-tight text-plum text-xl sm:text-2xl leading-none">
              {t.stickerFeedA}
            </span>
          </div>
          <div className="-mt-1 ml-4 sm:ml-6 inline-block rotate-[-8.6deg] bg-blush px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg whitespace-nowrap">
            <span className="font-display font-black italic tracking-tight text-plum text-xl sm:text-2xl leading-none">
              {t.stickerFeedB}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

function HeroPhone() {
  const t = copyFor(useLanguage().lang);
  const { ref: parallaxRef, offset } = useParallax<HTMLDivElement>(22);
  const { ref: stickerRef, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={parallaxRef}
      className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px]"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="absolute -inset-8 rounded-[64px] bg-gradient-to-br from-blush/50 via-transparent to-teal/40 blur-3xl -z-10" />
      <div className="animate-wasal-float" style={{ ["--tw-rotate" as string]: "-3deg" }}>
        <div className="relative rotate-[-3deg] motion-reduce:rotate-0 rounded-[54px] bg-plum p-[10px] shadow-[0_40px_80px_-20px_rgba(82,3,69,0.5)] ring-1 ring-plum/40">
          {/* side buttons */}
          <div className="absolute left-[-3px] top-24 h-8 w-[3px] rounded-l bg-plum/80" />
          <div className="absolute left-[-3px] top-40 h-14 w-[3px] rounded-l bg-plum/80" />
          <div className="absolute left-[-3px] top-60 h-14 w-[3px] rounded-l bg-plum/80" />
          <div className="absolute right-[-3px] top-36 h-20 w-[3px] rounded-r bg-plum/80" />

          <div className="relative overflow-hidden rounded-[46px] bg-black aspect-[9/19.5]">
            <img
              src={wasalScreen}
              alt="Wasal app — Al Noor Mosque community feed"
              className="block w-full h-full object-cover object-top select-none"
              draggable={false}
            />
            {/* dynamic island */}
            <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 h-[26px] w-[95px] rounded-full bg-black" />
          </div>
        </div>
      </div>

      {/* Social-proof sticker — pink, peels in on scroll */}
      <div
        ref={stickerRef}
        className={`sticker-peel ${shown ? "sticker-peel-in" : ""} absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 md:-bottom-10 md:-left-14 select-none group cursor-pointer`}
        aria-label={`${t.stickerHeroA} ${t.stickerHeroB}`}
        role="img"
        tabIndex={0}
      >
        <div className="relative transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-2 group-active:scale-95 group-focus-visible:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0">
          <div className="bg-blush px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
            <span className="font-display font-black italic tracking-tight text-plum text-2xl sm:text-3xl leading-none">
              {t.stickerHeroA}
            </span>
          </div>
          <div className="-mt-1 ml-5 sm:ml-7 inline-block rotate-[-8.6deg] bg-blush px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
            <span className="font-display font-black italic tracking-tight text-plum text-2xl sm:text-3xl leading-none">
              {t.stickerHeroB}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Wasal — the neighborhood app for Doha" },
      { name: "description", content: "Wasal is the private social layer for your street, mosque, and majlis in Doha. Join your neighborhood, meet the people on your block, and build a community rooted in trust." },
      { property: "og:title", content: "Wasal — the neighborhood app for Doha" },
      { property: "og:description", content: "Wasal is the private social layer for your street, mosque, and majlis in Doha." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Wasal — the app that connects neighborhoods" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wasal — the neighborhood app for Doha" },
      { name: "twitter:description", content: "Wasal is the private social layer for your street, mosque, and majlis in Doha." },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Landing() {
  const { lang } = useLanguage();
  const t = copyFor(lang);
  const isAr = lang === "ar";
  const legalLang = isAr ? "ar" : "en";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-blush/60 blur-3xl animate-wasal-blob" />
          <div className="absolute top-40 -right-20 w-[460px] h-[460px] rounded-full bg-teal/40 blur-3xl animate-wasal-blob" style={{ animationDelay: "-6s" }} />
          <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-cobalt/20 blur-3xl animate-wasal-blob" style={{ animationDelay: "-12s" }} />
        </div>

        <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="animate-wasal-rise">
            <span className="chip">
              <span className="relative w-2 h-2 rounded-full bg-teal animate-wasal-pulse-dot" />
              {t.heroChip}
            </span>
            <h1 className={`mt-6 font-display text-6xl md:text-8xl leading-[0.95] text-plum ${isAr ? "slogan-ar" : ""}`}>
              {t.heroTitleA}
              <em className="text-olive">{t.heroTitleEm}</em>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-plum/75 leading-relaxed">{t.heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#get" className="btn-olive btn-shine">{t.heroCta}</a>
              <a href="#how" className="btn-ghost">{t.heroCtaAlt}</a>
            </div>
          </div>

          {/* Hero phone mockup — realistic iPhone frame */}
          <HeroPhone />
        </div>

        {/* Trust row — first objection, answered immediately */}
        <div className="mx-auto max-w-6xl px-5 pb-16">
          <ul className="grid gap-4 sm:grid-cols-3">
            {t.trust.map((f, i) => {
              const Icon = [Lock, MapPin, ShieldCheck][i]!;
              return (
                <li key={f.t} className="flex gap-3 items-start rounded-3xl bg-card border border-border p-5">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-teal/20 grid place-items-center">
                    <Icon className="w-5 h-5 text-plum" strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-display text-xl text-plum leading-tight">{f.t}</div>
                    <p className="mt-1 text-sm text-plum/70 leading-relaxed">{f.d}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Wasal actions ribbon */}
        <ValuesRibbon />

        {/* Compact CTA strip */}
        <div className="border-b border-plum/10 bg-plum text-cream">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-center sm:text-left">
            <p className="text-sm md:text-base text-cream/85">{t.stripLine}</p>
            <a
              href="#get"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-plum px-5 py-2 text-sm font-semibold hover:bg-blush transition-colors"
            >
              {t.stripCta}
              <span aria-hidden="true">{isAr ? "←" : "→"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — poster steps */}
      <section id="how" className="mx-auto max-w-6xl px-4 md:px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="chip">{t.howChip}</div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-plum max-w-2xl leading-[0.95]">
              {t.howTitleA}
              <span className="poster-tag">{t.howTitleTag}</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">{t.howBody}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEP_POSTERS.map((s, i) => (
            <StepPosterCard key={t.steps[i]!.eyebrow} step={s} copy={t.steps[i]!} index={i} />
          ))}
        </div>
      </section>

      {/* FEED / PRODUCT */}
      <section id="feed" className="bg-plum text-cream py-24">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="chip !bg-plum !border-cream/20 !text-cream">{t.feedChip}</div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">{t.feedTitle}</h2>
            <p className="mt-5 text-cream/70 leading-relaxed">{t.feedBody}</p>
            <ul className="mt-8 space-y-4">
              {t.feedList.map((li) => (
                <li key={li} className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blush shrink-0" />
                  <span className="text-cream/85">{li}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Realistic iPhone with feed screen */}
          <FeedPhone />
        </div>
      </section>

      {/* SLOGAN */}
      <section aria-label={isAr ? "شعار وصال" : "Wasal slogan"} className="bg-olive text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 text-center">
          {isAr ? (
            <p dir="rtl" className="slogan-ar text-4xl sm:text-5xl md:text-6xl leading-[1.35]">
              وصال <span className="text-cream/70">..</span>{" "}
              <span className="poster-tag-cream">مش اتصال</span>
            </p>
          ) : (
            <p dir="ltr" className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95]">
              Connection <span className="italic text-cream/70">…</span> not just{" "}
              <span className="poster-tag-cream">contact</span>.
            </p>
          )}
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-5 py-24">
        <div className="chip">{t.faqChip}</div>
        <h2 className="mt-4 font-display text-5xl md:text-6xl text-plum max-w-2xl">{t.faqTitle}</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">{t.faqBody}</p>
        <div className="mt-10 divide-y divide-border rounded-3xl bg-card border border-border overflow-hidden">
          {t.faqs.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none px-6 py-5 hover:bg-blush/20 transition">
                <span className="font-display text-2xl text-plum">{f.q}</span>
                <span aria-hidden className="shrink-0 w-8 h-8 rounded-full bg-plum/10 text-plum grid place-items-center transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
              </summary>
              <div className="px-6 pb-6 -mt-1 text-foreground/75 leading-relaxed max-w-2xl">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="mx-auto max-w-6xl px-5 py-24">
        <div className="chip">{t.trustChip}</div>
        <h2 className="mt-4 font-display text-5xl md:text-6xl text-plum max-w-3xl">{t.trustTitle}</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {t.trustCards.map((c, i) => (
            <TrustCard key={c.t} title={c.t} desc={c.d} index={i} />
          ))}
        </div>
      </section>

      {/* GET APP */}
      <section id="get" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-4xl bg-olive text-cream p-10 md:p-16 relative overflow-hidden">
          <div className="relative max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl">{t.getTitle}</h2>
            <p className="mt-4 text-cream/85 max-w-lg">{t.getBody}</p>
            <EarlyAccessForm />
            <p className="mt-3 text-xs text-cream/60">
              {t.legalNote.a}
              <Link to="/legal/$lang/$slug" params={{ lang: legalLang, slug: "terms" }} className="underline">
                {t.legalNote.terms}
              </Link>
              {t.legalNote.mid}
              <Link to="/legal/$lang/$slug" params={{ lang: legalLang, slug: "privacy" }} className="underline">
                {t.legalNote.privacy}
              </Link>
              {t.legalNote.z}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function EarlyAccessForm() {
  const { lang } = useLanguage();
  const t = copyFor(lang);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [renderedAt] = useState(() => Date.now());
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic spam protection: honeypot + minimum time-on-page
    if (honeypot.trim() !== "") return;
    if (Date.now() - renderedAt < 1200) {
      setError(t.formSlowDown);
      return;
    }

    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) || value.length > 254) {
      setError(t.formInvalid);
      return;
    }

    setStatus("submitting");
    try {
      await subscribeLanding({ email: value, locale: lang });
      setStatus("success");
    } catch {
      setStatus("idle");
      setError(t.formFailed);
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-8 rounded-2xl bg-cream/15 border border-cream/30 p-5 max-w-md"
      >
        <div className="font-display text-2xl text-cream">{t.successTitle}</div>
        <p className="mt-1 text-sm text-cream/85">
          {t.successBodyA}<span className="font-semibold">{email}</span>{t.successBodyB}
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-8 max-w-md"
      onSubmit={onSubmit}
      noValidate
      aria-describedby={error ? "email-error" : undefined}
    >
      {/* Honeypot — hidden from real users, catches bots */}
      <label className="sr-only" aria-hidden="true">
        {"Do not fill this field"}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          maxLength={254}
          placeholder={t.formPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          aria-label={t.formEmailLabel}
          className="flex-1 rounded-full px-5 py-3 text-plum bg-cream placeholder:text-plum/70 outline-none focus-visible:ring-2 focus-visible:ring-plum"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-plum px-6 py-3 font-semibold hover:bg-plum/90 transition disabled:opacity-60"
        >
          {status === "submitting" ? t.formSubmitting : t.formSubmit}
        </button>
      </div>
      <p className="mt-2 text-sm text-cream/85">
        {t.formNote}
      </p>
      {error && (
        <p id="email-error" role="alert" className="mt-2 text-sm text-blush">
          {error}
        </p>
      )}
    </form>
  );
}
