import { GetSinglePost } from "@/app/components";
import React from "react";

const OnePostPage = ({ params: { id } }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GetSinglePost id={id} />
    </main>
  );
};

export default OnePostPage;
