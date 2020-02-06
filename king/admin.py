from django.contrib import admin
from .models import Post, Care, Side

# Register your models here.
admin.site.register(Post)
admin.site.register(Care)
admin.site.register(Side)