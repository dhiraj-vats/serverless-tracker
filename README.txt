UAT Tracker - Vercel Version

Steps:

1. Create PostgreSQL DB (Neon recommended)

Run SQL:

CREATE TABLE brds (
 id SERIAL PRIMARY KEY,
 module TEXT,
 brd_ref TEXT,
 uat_status TEXT
);

CREATE TABLE issues (
 id SERIAL PRIMARY KEY,
 brd_id INT,
 issue_title TEXT,
 assignee TEXT,
 issue_status TEXT
);

2. Install dependencies

npm install

3. Deploy

vercel

4. Add environment variable in Vercel

DATABASE_URL = postgres connection string

Done.