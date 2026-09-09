import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { copyFor } from "@/lib/copy";

const STORAGE_KEY = "wasal.cookie-consent.v1";

type Prefs = {
  necessary: true; // always on
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

function loadPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
}

function savePrefs(p: Prefs) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // ignore quota / private mode
  }
}

export function CookieConsent() {
  const { lang } = useLanguage();
  const c = copyFor(lang).cookie;
  const legalLang = lang === "ar" ? "ar" : "en";
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = loadPrefs();
    if (!existing) setVisible(true);
    else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
    const openHandler = () => {
      const p = loadPrefs();
      if (p) {
        setAnalytics(p.analytics);
        setMarketing(p.marketing);
      }
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener("wasal:open-cookie-preferences", openHandler);
    return () => window.removeEventListener("wasal:open-cookie-preferences", openHandler);
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Focus the dialog when it opens
    dialogRef.current?.focus();
  }, [visible, showPrefs]);

  const commit = (a: boolean, m: boolean) => {
    savePrefs({ necessary: true, analytics: a, marketing: m, decidedAt: new Date().toISOString() });
    setAnalytics(a);
    setMarketing(m);
    setVisible(false);
    setShowPrefs(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 pointer-events-none"
      aria-live="polite"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="false"
        aria-labelledby="wasal-cookie-title"
        aria-describedby="wasal-cookie-desc"
        className="pointer-events-auto mx-auto max-w-3xl rounded-2xl bg-plum text-cream shadow-2xl ring-1 ring-cream/10 p-5 sm:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      >
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h2 id="wasal-cookie-title" className="font-display text-2xl sm:text-3xl leading-tight">
              {c.title}
            </h2>
            <p id="wasal-cookie-desc" className="mt-2 text-sm text-cream/80 leading-relaxed">
              {c.desc}
            </p>
          </div>
        </div>

        {showPrefs && (
          <fieldset className="mt-5 space-y-3 border-t border-cream/10 pt-4">
            <legend className="sr-only">{c.legend}</legend>

            <label className="flex items-start gap-3 rounded-lg bg-cream/5 p-3">
              <input type="checkbox" checked disabled className="mt-1 accent-teal" aria-describedby="c-nec" />
              <span>
                <span className="font-semibold">{c.necessary}</span>
                <span id="c-nec" className="block text-xs text-cream/70">
                  {c.necessaryDesc}
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg bg-cream/5 p-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 accent-teal"
                aria-describedby="c-ana"
              />
              <span>
                <span className="font-semibold">{c.analytics}</span>
                <span id="c-ana" className="block text-xs text-cream/70">
                  {c.analyticsDesc}
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-lg bg-cream/5 p-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 accent-teal"
                aria-describedby="c-mkt"
              />
              <span>
                <span className="font-semibold">{c.marketing}</span>
                <span id="c-mkt" className="block text-xs text-cream/70">
                  {c.marketingDesc}
                </span>
              </span>
            </label>
          </fieldset>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2 justify-end">
          {!showPrefs && (
            <button
              type="button"
              onClick={() => setShowPrefs(true)}
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-4 py-2 text-sm font-medium hover:bg-cream/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal min-h-[44px]"
            >
              {c.manage}
            </button>
          )}
          <button
            type="button"
            onClick={() => commit(false, false)}
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-4 py-2 text-sm font-medium hover:bg-cream/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal min-h-[44px]"
          >
            {c.reject}
          </button>
          {showPrefs ? (
            <button
              type="button"
              onClick={() => commit(analytics, marketing)}
              className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-2 text-sm font-semibold text-plum hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream min-h-[44px]"
            >
              {c.save}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => commit(true, true)}
              className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-2 text-sm font-semibold text-plum hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream min-h-[44px]"
            >
              {c.acceptAll}
            </button>
          )}
        </div>

        <p className="mt-3 text-xs text-cream/60">
          {c.seeA}
          <a href={`/legal/${legalLang}/cookies`} className="underline hover:text-blush">
            {c.cookiePolicy}
          </a>
          {c.seeMid}
          <a href={`/legal/${legalLang}/privacy`} className="underline hover:text-blush">
            {c.privacyPolicy}
          </a>
          {c.seeZ}
        </p>
      </div>
    </div>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("wasal:open-cookie-preferences"));
}
