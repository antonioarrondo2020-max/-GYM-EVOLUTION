-- GYM EVOLUTION: almacenamiento privado por usuario
-- Ejecutar en Supabase SQL Editor. Nunca usar la service_role key en el navegador.

create table if not exists public.user_app_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  schema_version integer not null default 1,
  updated_at timestamptz not null default now(),
  constraint user_app_data_payload_object check (jsonb_typeof(payload) = 'object')
);

alter table public.user_app_data enable row level security;

drop policy if exists "Users can read their own app data" on public.user_app_data;
create policy "Users can read their own app data"
  on public.user_app_data for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own app data" on public.user_app_data;
create policy "Users can insert their own app data"
  on public.user_app_data for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own app data" on public.user_app_data;
create policy "Users can update their own app data"
  on public.user_app_data for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

grant select, insert, update on public.user_app_data to authenticated;
revoke all on public.user_app_data from anon;

create index if not exists user_app_data_updated_at_idx
  on public.user_app_data (updated_at);
