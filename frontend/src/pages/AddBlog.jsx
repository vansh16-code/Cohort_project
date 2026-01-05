import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../api'

function AddBlog() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!title || !author || !content) {
      alert('Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      await createBlog({ title, author, content })
      setTitle('')
      setAuthor('')
      setContent('')
      alert('Blog created!')
      navigate('/')
    } catch (err) {
      alert('Failed to create blog. Make sure backend is running!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="add-blog">
      <h2>Create New Blog</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content..."
            rows="10"
            disabled={loading}
          />
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Creating...' : 'Create Blog'}
        </button>
      </form>
    </div>
  )
}

export default AddBlog
