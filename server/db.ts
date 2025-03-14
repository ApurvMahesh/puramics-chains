import { Pool, neonConfig } from '@neondatabase/serverless';
import mysql from "mysql2/promise";
import { drizzle } from 'drizzle-orm/mysql2';
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

// Create MySQL connection
const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});

export const db = drizzle(pool); // Use MySQL drizzle connection
