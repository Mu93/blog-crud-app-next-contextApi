"use client";

import { ErrorMessage, Field } from "formik";

function FormRow({ name, type = "text", label }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}:
      </label>
      <Field
        name={name}
        type={type}
        id={name}
        className="w-full p-2 border rounded-md bg-gray-50"
      />
      <ErrorMessage
        name={name}
        component="small"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}

export default FormRow;
