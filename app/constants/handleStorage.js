export const getPostsFromLocalStorage = () => {
  const res = localStorage.getItem('posts')
  const posts = res ? JSON.parse(res) : null
  return posts
}

export const addPostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts))
}

export const removePostsFromLocalStorage = () => {
  const res = localStorage.getItem('posts')
  if (res) {
    localStorage.removeItem('posts')
    window.location = '/'
  }
}
