from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    position_y = models.CharField(max_length=200)
    position_x = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class Care(models.Model):
    title = models.CharField(max_length=200)
    position_y = models.CharField(max_length=200)
    position_x = models.CharField(max_length=200)
    description = models.TextField()
    phonenumb = models.CharField(max_length=200)

    def __str__(self):
        return self.title