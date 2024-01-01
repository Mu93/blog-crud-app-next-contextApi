"use client";
import { Formik, Form } from "formik";
import { FormLayout, FormRow, Button } from "@/app/components";
import { addPostValidationSchema } from "@/app/constants/FormValidation";
import { usePostContext } from "@/app/contexts/posts/PostContext";
import { useRouter } from "next/navigation";

const CreateNewPost = () => {
  const { createPost } = usePostContext();
  const router = useRouter();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    createPost(values);
    resetForm();
    setSubmitting(false);
    router.push("/");
  };

  const initialValues = {
    title: "",
    body: "",
  };

  return (
    <FormLayout title="CreatePostPage">
      <Formik
        initialValues={initialValues}
        validationSchema={addPostValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm, values }) => (
          <Form>
            <FormRow name="title" label="Title" value={values.title} />

            <FormRow name="body" label="Body" value={values.body} />

            <div>
              <Button
                className="btn btn-primary text-white bg-blue-500 disabled:bg-blue-300"
                type="submit"
              >
                Create
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default CreateNewPost;
