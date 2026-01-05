import { useState, useEffect } from 'react'
import { getBlogs, deleteBlog } from '../api'
import BlogCard from '../components/BlogCard'

function Home() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadBlogs()
  }, [])

  async function loadBlogs() {
    try {
      setLoading(true)
      const data = await getBlogs()
      setBlogs(data)
      setError(null)
    } catch (err) {
      setError('Failed to load blogs. Make sure backend is running!')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(blogId) {
    try {
      await deleteBlog(blogId)
      loadBlogs()
    } catch (err) {
      alert('Failed to delete blog')
    }
  }

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return (
    <div className="home">
      <h2>All Blogs</h2>
      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs yet. Create your first one!</p>
      ) : (
        <div className="blogs-list">
          {blogs.map(blog => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
