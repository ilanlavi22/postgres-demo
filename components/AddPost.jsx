import { createPost } from "@/utils/actions";

export default function AddPost() {
  return (
    <div>
      <form action={createPost} className="flex w-full">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="content" placeholder="Content" />
        <input type="text" name="authorId" placeholder="Author Id" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
