import { getSinglePost } from "@/utils/actions";
import { editPost } from "@/utils/actions";

export default async function EditPost({ id }) {
  const data = await getSinglePost(id, { include: { author: true } });
  const { title, content, authorId } = data;

  return (
    <form
      action={editPost}
      className="flex w-full flex-col gap-4 rounded-md border-[1px] border-gray-300 p-8"
    >
      <input type="hidden" name="id" value={id} />
      <div>
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder="Title"
          className="w-full"
        />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Type here"
          name="content"
          defaultValue={content}
          className="w-full p-5"
        />
      </div>

      <div>
        <input
          type="text"
          name="authorId"
          defaultValue={authorId}
          placeholder="Author Id"
          className="w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
