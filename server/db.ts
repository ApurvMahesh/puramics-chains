import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import * as schema from '@shared/schema';
import dotenv from "dotenv";
dotenv.config();
// Configure WebSocket for Neon serverless
neonConfig.webSocketConstructor = ws;

// Ensure the DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL must be set. Did you forget to provision a database?',
  );
}

// Initialize database connection pool
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create a Drizzle ORM instance
export const db = drizzle({
  client: pool,
  schema,
});
