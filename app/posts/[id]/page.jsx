import { getSinglePost } from "@/utils/actions";

import Link from "next/link";
import DeletePost from "@/components/DeletePost";

export default async function PostPage({ params }) {
  const id = params.id;
  const data = await getSinglePost(id, { include: { author: true } });

  return (
    <div className="mt-20 flex flex-col">
      <h1 className="font-bold min-h-[50px] first-letter:capitalize">
        {data?.title}
      </h1>
      <p className=" whitespace-break-spaces leading-6">{data?.content}</p>
      <p className="mt-10">{data?.author?.name}</p>
      <div className="mt-20">
        <Link
          className="bg-black text-white px-5 py-3 rounded-md font-medium text-base"
          href={`/posts/${id}/edit`}
        >
          Edit
        </Link>
        <DeletePost id={id} />
      </div>
    </div>
  );
}
