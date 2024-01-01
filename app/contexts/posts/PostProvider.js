'use client'
import { PostProvider } from './PostContext'

const Provider = ({ children }) => {
  return (
    <>
      <PostProvider>{children}</PostProvider>
    </>
  )
}

export default Provider
