import EditPost from "@/components/EditPost";

export default function EditPostPage({ params }) {
  const id = params.id;

  return (
    <div className="mt-20 flex flex-col">
      <EditPost id={id} />
    </div>
  );
}
