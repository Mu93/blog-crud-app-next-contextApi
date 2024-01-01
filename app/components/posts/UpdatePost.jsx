"use client";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { FormLayout, FormRow, Button } from "@/app/components";
import { addPostValidationSchema } from "@/app/constants/FormValidation";
import { usePostContext } from "@/app/contexts/posts/PostContext";
import { useRouter } from "next/navigation";
import { constants } from "buffer";
const UpdatePost = ({ id }) => {
  const { updatePost, fetchSinglePost } = usePostContext();
  const [updatedPost, setUpdatedPost] = useState({ title: "", body: "" });
  const router = useRouter();

  useEffect(() => {
    const handleUpdatePost = async (postId) => {
      const singlePost = await fetchSinglePost(postId);
      setUpdatedPost(singlePost);
    };
    handleUpdatePost(id);
  }, [id, fetchSinglePost]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    updatePost(id, values);
    resetForm();
    setSubmitting(false);
    router.push("/");
  };

  return (
    <FormLayout title="UpdatePostPage">
      <Formik
        initialValues={updatedPost}
        validationSchema={addPostValidationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ resetForm, values }) => (
          <Form>
            {console.log(values)}
            <FormRow name="title" label="Title" value={updatedPost.title} />

            <FormRow name="body" label="Body" value={updatedPost.body} />

            <div>
              <Button
                className="bg-blue-500 text-white mr-3 w-full disabled:bg-blue-300  py-2 px-4"
                type="submit"
              >
                Update
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default UpdatePost;
