import db from "@/db";
import { advocates } from "@/db/schema";
import { advocateData } from "@/db/seed/advocates";
import { type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "@/db/schema";

export async function POST(request: Request) {
  // Only allow seeding in development
  if (process.env.NODE_ENV !== "development") {
    return new Response(
      JSON.stringify({ error: "Seeding is only allowed in development" }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Check if we have a valid database connection
    if (!('insert' in db)) {
      throw new Error("Database connection not properly initialized");
    }

    const records = await (db as PostgresJsDatabase<typeof schema>).insert(advocates).values(advocateData).returning();
    return Response.json({ advocates: records });
  } catch (error) {
    console.error("Error seeding database:", error);
    return new Response(
      JSON.stringify({ error: "Failed to seed database" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
