import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const PostContext = createContext()
const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
// const baseUrl = 'https://dummyjson.com/posts'

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts on component mount
    const fetchPosts = async () => {
      try {
        const response = await axios.get(baseUrl)
        // const { posts } = response.data
        const posts = response.data
        setPosts(posts)
      } catch (error) {
        toast.error(error.message)
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  const fetchSinglePost = async (postId) => {
    try {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`)
      return response.data
    } catch (error) {
      toast.error(error.message)
      console.error('Error fetching single post:', error)
    }
  }

  const createPost = async (newPost) => {
    try {
      console.log('newPost', newPost)
      const response = await axios.post(`${baseUrl}`, newPost)
      // const response = await axios.post(`${baseUrl}/add`, newPost)
      console.log(response)
      setPosts([...posts, response.data])
      toast.success('Post created successfully')
    } catch (error) {
      console.error('Error creating post:', error)
      toast.error(error.message)
      console.error('Server Logs:', error.response.headers['x-server-logs'])
    }
  }

  const updatePost = async (postId, updatedPost) => {
    try {
      await axios.put(`${baseUrl}/${postId}`, updatedPost)
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, ...updatedPost } : post,
        ),
      )
      toast.success('Post updated successfully')
    } catch (error) {
      toast.error(error.message)
      console.error('Error updating post:', error)
    }
  }

  const deletePost = async (postId) => {
    try {
      await axios.delete(`${baseUrl}/${postId}`)
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
      toast.success('Post deleted successfully')
    } catch (error) {
      toast.error(error.message)
      console.error('Error deleting post:', error)
    }
  }

  return (
    <PostContext.Provider
      value={{ posts, createPost, updatePost, deletePost, fetchSinglePost }}
    >
      {children}
    </PostContext.Provider>
  )
}

export const usePostContext = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider')
  }
  return context
}
