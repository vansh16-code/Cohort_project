from ninja import NinjaAPI, Schema
from .models import Blog
from typing import List
import os
from google import genai

api = NinjaAPI()

class BlogIn(Schema):
    title: str
    author: str
    content: str

class BlogOut(Schema):
    id: int
    title: str
    author: str
    content: str

class ChatIn(Schema):
    message: str

class ChatOut(Schema):
    reply: str

@api.get("/blogs", response=List[BlogOut])
def list_blogs(request):
    return Blog.objects.all().order_by('-created_at')

@api.post("/blogs", response=BlogOut)
def create_blog(request, data: BlogIn):
    blog = Blog.objects.create(
        title=data.title,
        author=data.author,
        content=data.content
    )
    return blog

@api.delete("/blogs/{blog_id}")
def delete_blog(request, blog_id: int):
    blog = Blog.objects.get(id=blog_id)
    blog.delete()
    return {"success": True}

@api.post("/chat", response=ChatOut)
def chat_with_ai(request, data: ChatIn):
    try:
        api_key = os.getenv('GEMINI_API_KEY')
        if not api_key:
            return {"reply": "Error: GEMINI_API_KEY not configured"}
        
        prompt = f"""You are a helpful AI assistant for a blog platform.
        
User Question: {data.message}

Provide helpful, friendly, and informative responses. Keep answers clear and concise."""
        
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-2.0-flash-exp',
            contents=prompt
        )
        return {"reply": response.text}
    except Exception as e:
        return {"reply": f"Error: {str(e)}"}
