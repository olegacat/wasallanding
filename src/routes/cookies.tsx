import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy URL — the Cookie Policy now lives in the unified Legal Hub.
export const Route = createFileRoute("/cookies")({
  beforeLoad: () => {
    throw redirect({ to: "/legal/$lang/$slug", params: { lang: "en", slug: "cookies" } });
  },
});
