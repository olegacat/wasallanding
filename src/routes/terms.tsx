import { createFileRoute, redirect } from "@tanstack/react-router";

// Short, shareable alias for the Terms of Service in the Legal Hub.
export const Route = createFileRoute("/terms")({
  beforeLoad: () => {
    throw redirect({ to: "/legal/$lang/$slug", params: { lang: "en", slug: "terms" } });
  },
});
