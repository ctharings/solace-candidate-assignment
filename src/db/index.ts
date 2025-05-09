import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const setup = () => {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set");
    return {
      select: () => ({
        from: () => [],
      }),
    };
  }

  try {
    // for query purposes
    const queryClient = postgres(process.env.DATABASE_URL, {
      max: 10, // Maximum number of connections
      idle_timeout: 20, // Idle connection timeout in seconds
      connect_timeout: 10, // Connection timeout in seconds
    });
    
    const db = drizzle(queryClient, { schema });
    return db;
  } catch (error) {
    console.error("Failed to initialize database connection:", error);
    return {
      select: () => ({
        from: () => [],
      }),
    };
  }
};

export default setup();
