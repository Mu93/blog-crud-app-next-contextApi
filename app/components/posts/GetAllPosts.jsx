import Link from "next/link";
import PostsTable from "./PostsTable";

const GetAllPosts = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl mb-8">Post App</h2>
        <div>
          <Link href={`/create`} className="btn btn-primary">
            Create
          </Link>
        </div>
      </div>
      <div className="border">
        <PostsTable />
      </div>
    </section>
  );
};

export default GetAllPosts;
