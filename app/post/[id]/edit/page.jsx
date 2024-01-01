import { UpdatePost } from "@/app/components";

const UpdatePostPage = ({ params: { id } }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UpdatePost id={id} />
    </main>
  );
};

export default UpdatePostPage;
