from django import forms
from .models import Post, Care
from django.contrib.auth.models import User

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'position_y', 'position_x', 'description')


class CareForm(forms.ModelForm):

    class Meta:
        model = Care
        fields = ('title', 'position_y', 'position_x', 'description', 'phonenumb')
