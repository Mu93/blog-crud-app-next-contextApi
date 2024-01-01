import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg my-10">
        Sorry, the page you&apos;re looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white hover:underline p-4 rounded"
      >
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
