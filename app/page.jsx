import Link from "next/link";
import { getAllPosts } from "@/utils/actions";
import AddPost from "@/components/AddPost";

export default async function Home() {
  const data = await getAllPosts({ include: { author: true } });
  console.log(data);

  return (
    <section>
      <h1>Home</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.author.name}</p>
            <Link href={`/posts/${post.id}`}>{post.content}</Link>
          </li>
        ))}
      </ul>

      <AddPost />
    </section>
  );
}
