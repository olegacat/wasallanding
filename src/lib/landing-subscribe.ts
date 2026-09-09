const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export async function subscribeLanding(input: {
  email: string;
  locale: "en" | "ar";
}): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    throw new Error("missing supabase env");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/landing_subscriptions?on_conflict=email`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal,resolution=ignore-duplicates",
    },
    body: JSON.stringify({
      email: input.email.trim().toLowerCase(),
      locale: input.locale,
    }),
  });

  if (response.ok || response.status === 409) return;

  const payload = (await response.json().catch(() => null)) as
    | { code?: string }
    | null;
  if (payload?.code === "23505") return;

  throw new Error(`landing subscribe failed (${response.status})`);
}
