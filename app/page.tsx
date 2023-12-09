import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

async function getPosts() {
  const posts = await sql`SELECT * FROM posts`;
  return posts;
}

export default async function Home() {
  const allPosts = await getPosts();
  console.log(allPosts);
  return (
    <section>
      <h1>Home</h1>
    </section>
  );
}
