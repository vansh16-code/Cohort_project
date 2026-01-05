import { useState } from 'react'
import { sendChatMessage } from '../api'

function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSend(e) {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { type: 'user', text: userMessage }])

    try {
      setLoading(true)
      const response = await sendChatMessage(userMessage)
      setMessages(prev => [...prev, { type: 'ai', text: response.reply }])
    } catch (err) {
      setMessages(prev => [...prev, { 
        type: 'error', 
        text: 'Failed. Make sure backend is running and GEMINI_API_KEY is set!' 
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chat">
      <h2> AI Chat</h2>
      <div className="chat-container">
        <div className="messages">
          {messages.length === 0 && (
            <p className="welcome">Ask me anything!</p>
          )}
          
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <div className="message-content">{msg.text}</div>
            </div>
          ))}
          
          {loading && (
            <div className="message ai">
              <div className="message-content">Thinking...</div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
          />
          <button type="submit" disabled={loading || !input.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
