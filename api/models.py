from django.db import models
from django.utils.html import format_html
class Employe(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField()
    postition = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def image_tag(self):
        return format_html('<img src="{}" width="50" height="50" />'.format(self.image.url))
    def __str__(self):
        return self.username

