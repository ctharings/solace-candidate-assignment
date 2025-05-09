import db from "@/db";
import { advocates } from "@/db/schema";
import { advocateData } from "@/db/seed/advocates";

export async function GET() {
  try {
    // Uncomment this line to use a database
    const data = await db.select().from(advocates);

    // const data = advocateData;

    return Response.json({ data });
  } catch (error) {
    console.error("Error fetching advocates:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch advocates" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
