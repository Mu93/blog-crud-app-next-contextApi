"use client";
import Link from "next/link";
import { Button } from "@/app/components";
import { usePostContext } from "@/app/contexts/posts/PostContext";
import { useState } from "react";

const PostsTable = () => {
  const { posts, deletePost } = usePostContext();
  const [limit, setLimit] = useState(10);

  return (
    <>
      <table className="min-w-full table table-bordered">
        <colgroup>
          <col className="border-r border-gray-300" />
          <col className="border-r border-gray-300" />
          <col className="border-r border-gray-300" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">ID</th>
            <th className="py-2 px-4 border-b border-gray-300">
              {/* query string parameters pass state on the server  */}
              <Link href="/?sortOrder=title">Title</Link>
            </th>
            <th className="py-2 px-4 border-b border-gray-300">
              <Link href="/?sortOrder=body">Body</Link>
            </th>
            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts?.slice(0, limit).map((post) => (
            <tr key={post.id}>
              <td className="py-2 px-4 border-b border-gray-300">{post.id}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-blue-500">
                <Link href={`post/${post.id}`}>{post.title}</Link>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {post.body.slice(0, 100) + "..."}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 flex space-x-3">
                <Link href={`/post/${post.id}/edit`}>
                  <Button className="btn btn-primary text-white bg-blue-500 disabled:bg-blue-300">
                    Edit
                  </Button>
                </Link>
                <Button
                  onClick={() => deletePost(post.id)}
                  className="btn btn-error text-white bg-red-500 disabled:bg-red-300"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5 flex items-center justify-center ">
        <button
          className="btn btn-primary disabled:bg-blue-100"
          onClick={() => setLimit((prev) => (prev + 10))}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default PostsTable;
