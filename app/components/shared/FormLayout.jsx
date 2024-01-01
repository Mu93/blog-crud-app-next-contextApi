function FormLayout({ children, title }) {
  return (
    <div className="max-w-7xl w-full mx-auto bg-white rounded-md overflow-hidden shadow-md mt-16">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-10">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default FormLayout;
