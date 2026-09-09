-- Landing “Notify me” email signups. Run once in the Supabase SQL Editor. Idempotent.

create table if not exists public.landing_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text not null default 'en',
  created_at timestamptz not null default now(),
  constraint landing_subscriptions_email_key unique (email),
  constraint landing_subscriptions_email_len check (char_length(email) between 3 and 254),
  constraint landing_subscriptions_locale_chk check (locale in ('en', 'ar'))
);

comment on table public.landing_subscriptions is
  'Emails from the landing Notify me form.';

create or replace function public.landing_subscriptions_normalize()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  new.email := lower(btrim(new.email));
  new.locale := lower(btrim(coalesce(new.locale, 'en')));
  return new;
end;
$$;

drop trigger if exists landing_subscriptions_normalize on public.landing_subscriptions;
create trigger landing_subscriptions_normalize
before insert or update of email, locale
on public.landing_subscriptions
for each row
execute function public.landing_subscriptions_normalize();

alter table public.landing_subscriptions enable row level security;
revoke all on public.landing_subscriptions from public;
revoke all on public.landing_subscriptions from anon;
revoke all on public.landing_subscriptions from authenticated;
grant insert (email, locale) on public.landing_subscriptions to anon;
grant all on public.landing_subscriptions to service_role;

drop policy if exists landing_subscriptions_anon_insert on public.landing_subscriptions;
create policy landing_subscriptions_anon_insert
  on public.landing_subscriptions
  for insert
  to anon
  with check (
    email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'
    and char_length(email) <= 254
    and locale in ('en', 'ar')
  );

revoke all on function public.landing_subscriptions_normalize() from public, anon, authenticated;
