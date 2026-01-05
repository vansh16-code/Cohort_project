import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Cohort App</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Blog</Link>
        <Link to="/chat">AI Chat</Link>
      </div>
    </nav>
  )
}

export default Navbar
