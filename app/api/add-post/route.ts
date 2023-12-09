import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postTitle = searchParams.get("title");
  const postContent = searchParams.get("content");

  try {
    if (!postTitle || !postContent)
      throw new Error("Post title and content are required");
    await sql`INSERT INTO Posts (Title, Content) VALUES (${postTitle}, ${postContent});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const posts = await sql`SELECT * FROM Posts;`;
  return NextResponse.json({ posts }, { status: 200 });
}
