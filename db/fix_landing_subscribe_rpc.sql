-- Run this in the WASAL BACKEND SQL Editor (table already exists).
-- Direct INSERT from the landing is denied (42501); subscribe via RPC instead.

revoke all on public.landing_subscriptions from public;
revoke all on public.landing_subscriptions from anon;
revoke all on public.landing_subscriptions from authenticated;
grant all on public.landing_subscriptions to service_role;

drop policy if exists landing_subscriptions_anon_insert on public.landing_subscriptions;

create or replace function public.subscribe_landing(email text, locale text default 'en')
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  e text := lower(btrim(coalesce(email, '')));
  loc text := lower(btrim(coalesce(locale, 'en')));
begin
  if loc not in ('en', 'ar') then
    loc := 'en';
  end if;
  if e !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$' or char_length(e) > 254 then
    raise exception 'invalid email' using errcode = '22023';
  end if;

  insert into public.landing_subscriptions (email, locale)
  values (e, loc)
  on conflict (email) do nothing;
end;
$$;

revoke all on function public.subscribe_landing(text, text) from public;
grant execute on function public.subscribe_landing(text, text) to anon;
grant execute on function public.subscribe_landing(text, text) to authenticated;
