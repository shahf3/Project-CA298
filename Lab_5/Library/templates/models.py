from django.db import models

# Create your models here.
class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()

class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(unique=True)
    author = models.TextField()
    # (assume a string with no spaces, e.g. scifi, horror etc..)
    genre = models.TextField()
    release_year = models.IntegerField(default=2022)
    stock = models.IntegerField(default=1)
    # international standard book number (max length is 13 digits)
    # i'm using this to query extra info on the book from the openlibrary.org api
    isbn = models.CharField(max_length=13)

class Borrow(models.Model):
    id = models.AutoField(primary_key=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    due_date = models.DateField()
    is_returned = models.BooleanField()
