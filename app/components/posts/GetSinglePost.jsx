"use client";

import { Button, FormLayout } from "@/app/components";
import { notFound } from "next/navigation";
import Loading from "@/app/loading";
import { usePostContext } from "@/app/contexts/posts/PostContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// GetSinglePost
const GetSinglePost = ({ id }) => {
  const { fetchSinglePost, deletePost } = usePostContext();
  const [singlePost, setSinglePost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleSinglePost = async (postId) => {
      const singlePost = await fetchSinglePost(postId);
      setSinglePost(singlePost);
    };
    handleSinglePost(id);
  }, [id, fetchSinglePost]);

  const handelPostDelete = (id) => {
    deletePost(id);
    router.push("/");
  };
  return (
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
          <th className="py-2 px-4 border-b border-gray-300">Title</th>
          <th className="py-2 px-4 border-b border-gray-300">Body</th>
          <th className="py-2 px-4 border-b border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b border-gray-300">
            {singlePost?.id}
          </td>
          <td className="py-2 px-4 border-b border-gray-300">
            {singlePost?.title}
          </td>
          <td className="py-2 px-4 border-b border-gray-300">
            {singlePost?.body}
          </td>
          <td className="py-2 px-4 border-b border-gray-300 flex space-x-3">
            <Button
              className="btn btn-error bg-red-500 text-white disabled:bg-red-300"
              onClick={() => handelPostDelete(singlePost?.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GetSinglePost;
