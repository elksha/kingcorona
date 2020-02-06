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
        
class Side(models.Model):
    uptime = models.CharField(max_length=200)
    defnum = models.CharField(max_length=200)
    defnumb = models.CharField(max_length=200)
    dnum = models.CharField(max_length=200)
    dnumb = models.CharField(max_length=200)
    cnum = models.CharField(max_length=200)
    cnumb = models.CharField(max_length=200)

    def __str__(self):
        return self.uptime