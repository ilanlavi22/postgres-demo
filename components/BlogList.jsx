import Link from "next/link";
import { getAllPosts } from "@/utils/actions";

export default async function BlogList({ limitPosts }) {
  const data = await getAllPosts();
  const dataSorted = data.slice(0, limitPosts ? limitPosts : data.length);

  return (
    <article className="grid grid-cols-auto-fill gap-8">
      {dataSorted.map((post) => (
        <div
          key={post.id}
          className="flex flex-col p-5 items-start justify-start rounded-md drop-shadow-sm bg-[#e9e8e8] gap-8"
        >
          <h1 className="font-bold min-h-[50px] first-letter:capitalize">
            {post.title}
          </h1>
          <p className=" whitespace-break-spaces text-sm leading-6 ">
            {post.content}
          </p>

          <Link href={`/posts/${post.id}`} className="mt-auto">
            <p>{post?.author?.name}</p>
          </Link>
        </div>
      ))}
    </article>
  );
}
