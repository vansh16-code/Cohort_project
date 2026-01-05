


function BlogCard({ blog, onDelete }) {
  function handleDelete() {
    if (confirm('Delete this blog?')) {
      onDelete(blog.id)
    }
  }

  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p className="author">By {blog.author}</p>
      <p className="content">{blog.content}</p>
      <div className="blog-footer">
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  )
}

export default BlogCard
