from django.db import models

# Create your models here.
class Book(models.Model):
   id = models.AutoField(primary_key = True)
   year = models.TextField()
   author = models.TextField()
   price = models.IntegerField()
   title = models.TextField()
   synopsis = models.TextField()
   class Category(models.TextChoices):
      c1 = "science"
      c2 = "history & politics"
      c3 = "language"
   category = models.TextField(choices=Category.choices, default=Category.c1)
