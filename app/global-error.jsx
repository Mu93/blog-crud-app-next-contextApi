"use client";
import Link from "next/link";

const GlobalErrorPage = ({ error, reset }) => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {error ? `Error ${error}` : "Unexpected Error"}
      </h1>
      <p className="text-lg  my-10">
        {error
          ? "Sorry, there was an error on the server."
          : "Sorry, something went wrong."}
      </p>
      <button className="btn btn-info  mr-5 " onClick={() => reset()}>
        Retry
      </button>

      <Link href="/" className="btn btn-info">
        Go back to the global page
      </Link>
    </div>
  );
};

export default GlobalErrorPage;
