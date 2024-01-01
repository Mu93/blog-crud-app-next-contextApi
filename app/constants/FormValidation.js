import * as Yup from 'yup'
export const addPostValidationSchema = Yup.object({
  title: Yup.string().required('Title is required').min(3),
  body: Yup.string().required('Body is required').min(7),
})
