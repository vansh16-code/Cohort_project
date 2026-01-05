# 📝 Blog + AI Chat Platform

A simple full-stack web application for beginners to learn CRUD operations and AI integration. Built with React and Django.

## ✨ Features

- 📖 **View Blogs** - Browse all blog posts
- ✍️ **Create Blogs** - Add new blog posts with title, author, and content
- 🗑️ **Delete Blogs** - Remove unwanted blog posts
- 🤖 **AI Chat** - Chat with Gemini AI assistant
- 🎨 **Clean UI** - Professional, responsive design
- 🔄 **Real Routing** - URL-based navigation with React Router

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **CSS** - Styling

### Backend
- **Django** - Web framework
- **Django Ninja** - REST API framework
- **SQLite** - Database
- **Google Gemini AI** - AI chat integration

## 📁 Project Structure

```
.
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── BlogCard.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── AddBlog.jsx
│   │   │   └── Chat.jsx
│   │   ├── api.js           # API calls
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   └── package.json
│
└── project/                 # Django backend
    ├── core/                # Main app
    │   ├── models.py        # Blog model
    │   ├── api.py           # API endpoints
    │   └── migrations/
    ├── project/             # Django settings
    │   ├── settings.py
    │   └── urls.py
    ├── manage.py
    └── requirements.txt
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/vansh16-code/Cohort_project.git
cd Cohort_project
```

### 2. Backend Setup

```bash
cd project

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo "GEMINI_API_KEY=your_api_key_here" > .env

# Run migrations
python manage.py migrate

# Start Django server
python manage.py runserver
```

Backend will run on: **http://localhost:8000**

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on: **http://localhost:5173**

### 4. Get Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to `project/.env`:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

## 📖 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | Get all blogs |
| POST | `/api/blogs` | Create a new blog |
| DELETE | `/api/blogs/{id}` | Delete a blog |
| POST | `/api/chat` | Chat with AI |

### Example API Request

**Create Blog:**
```bash
curl -X POST http://localhost:8000/api/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Blog",
    "author": "John Doe",
    "content": "This is my first blog post!"
  }'
```

## 🎓 Learning Concepts

This project demonstrates:

### Frontend
- ✅ React Hooks (useState, useEffect)
- ✅ Controlled Inputs
- ✅ API Integration with Fetch
- ✅ React Router for Navigation
- ✅ Component-based Architecture
- ✅ Conditional Rendering
- ✅ Event Handling

### Backend
- ✅ Django Models
- ✅ REST API with Django Ninja
- ✅ CRUD Operations
- ✅ Schema Validation
- ✅ CORS Configuration
- ✅ Environment Variables
- ✅ AI Integration

## 🎨 Screenshots

### Home Page
View all blog posts with clean, professional design.

### Add Blog
Simple form with controlled inputs for creating new blogs.

### AI Chat
Interactive chat interface powered by Google Gemini AI.

## 🔧 Configuration

### CORS Settings
The backend is configured to accept requests from `http://localhost:5173`. To change this, edit `project/project/settings.py`:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Your frontend URL
]
```

### Database
The project uses SQLite by default. The database file is `project/db.sqlite3`.

## 🐛 Troubleshooting

### Backend won't start
- Make sure Python 3.8+ is installed: `python --version`
- Check if all dependencies are installed: `pip install -r requirements.txt`
- Verify you're in the `project` directory

### Frontend won't start
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check if port 5173 is available

### AI Chat not working
- Verify `GEMINI_API_KEY` is set in `project/.env`
- Check if the backend server is running
- Look for errors in the browser console (F12)

### Blogs not loading
- Ensure both backend (port 8000) and frontend (port 5173) are running
- Check browser console for CORS errors
- Verify API URL in `frontend/src/api.js`

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Django Documentation](https://docs.djangoproject.com/)
- [Django Ninja Documentation](https://django-ninja.rest-framework.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Google Gemini AI Documentation](https://ai.google.dev/)

## 🤝 Contributing

This is a learning project for beginners. Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests
- Ask questions

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Vansh**
- GitHub: [@vansh16-code](https://github.com/vansh16-code)

## 🙏 Acknowledgments

- Built for students learning full-stack development
- Inspired by modern web development practices
- Designed to be simple and beginner-friendly

---

**Happy Coding! 🚀**

If you found this helpful, please ⭐ star the repository!
