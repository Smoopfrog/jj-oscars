# Database migrations

Run SQL migrations against your local or deployed Postgres.

**2026 Oscars (98th Academy Awards)**  
Adds the new **Casting** category, 2026 movies, and all nominees with `nominee_year = 2026`, `winner = false`.

```bash
# From project root, with DATABASE_URL set or default local:
psql "$DATABASE_URL" -f backend/migrations/2026_oscars.sql

# Or explicit local:
psql postgresql://jeffstinson:postgres@localhost/oscars -f backend/migrations/2026_oscars.sql
```

Ensure categories and schema already exist (e.g. from `oscars.sql` or `db.create_all()`).
