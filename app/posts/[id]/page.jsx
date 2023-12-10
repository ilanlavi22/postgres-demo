import { getSinglePost } from "@/utils/actions";

export default async function PostPage({ params }) {
  const id = params.id;
  const data = await getSinglePost(id, { include: { author: true } });
  console.log(data);

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.content}</p>
      <p>{data?.author.name}</p>
    </div>
  );
}
