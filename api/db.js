// const { Pool } = require("pg");

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false }
// });

// module.exports = pool;
const { Pool } = require("pg");

const pool = new Pool({
 connectionString: "postgresql://neondb_owner:npg_9UPCfpAEOh2R@ep-fragrant-frost-an20w88p-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
 ssl: {
  rejectUnauthorized: false
 }
});

module.exports = pool;