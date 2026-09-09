-- Matches the live function. Do not rename parameters without DROP FUNCTION.

create or replace function public.subscribe_landing(_email text, _locale text default 'en')
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  normalized_email text := lower(btrim(coalesce(_email, '')));
  normalized_locale text := lower(btrim(coalesce(_locale, 'en')));
begin
  if normalized_locale not in ('en', 'ar') then
    normalized_locale := 'en';
  end if;
  if normalized_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'
     or char_length(normalized_email) > 254 then
    raise exception 'invalid email' using errcode = '22023';
  end if;

  insert into public.landing_subscriptions as s (email, locale)
  values (normalized_email, normalized_locale)
  on conflict (email) do nothing;
end;
$$;

grant execute on function public.subscribe_landing(text, text) to anon;
grant execute on function public.subscribe_landing(text, text) to authenticated;
