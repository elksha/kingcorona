from django.shortcuts import render, redirect
from .forms import PostForm, CareForm, SideForm
from .models import Post, Care, Side
from django.contrib import auth
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.conf import settings

# Create your views here.
def index(request):
    posts = Post.objects.all()
    cares = Care.objects.all()
    sides = Side.objects.get(pk=1)
    key = settings.KAKAO_JS_KEY
    return render(request, 'index.html', { 'posts' : posts, 'cares' : cares, 'key' : key, 'sides' : sides } )
    
def policy(request):
    return render(request, 'policy.html')