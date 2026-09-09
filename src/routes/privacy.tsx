import { createFileRoute, redirect } from "@tanstack/react-router";

// Short, shareable alias for the Privacy Policy in the Legal Hub.
export const Route = createFileRoute("/privacy")({
  beforeLoad: () => {
    throw redirect({ to: "/legal/$lang/$slug", params: { lang: "en", slug: "privacy" } });
  },
});
