import { deletePost } from "@/utils/actions";

export default function DeletePost({ id }) {
  console.log(id);

  return (
    <form action={deletePost}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-outline btn-secondary btn-sm">Delete</button>
    </form>
  );
}
