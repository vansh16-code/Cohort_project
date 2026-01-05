const API_URL = 'http://localhost:8000/api'

export async function getBlogs() {
  const response = await fetch(`${API_URL}/blogs`)
  if (!response.ok) throw new Error('Failed to fetch blogs')
  return response.json()
}

export async function createBlog(blogData) {
  const response = await fetch(`${API_URL}/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData)
  })
  if (!response.ok) throw new Error('Failed to create blog')
  return response.json()
}

export async function deleteBlog(blogId) {
  const response = await fetch(`${API_URL}/blogs/${blogId}`, {
    method: 'DELETE'
  })
  if (!response.ok) throw new Error('Failed to delete blog')
  return response.json()
}

export async function sendChatMessage(message) {
  const response = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  })
  if (!response.ok) throw new Error('Failed to send message')
  return response.json()
}
