import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import Chat from './pages/Chat'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBlog />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
