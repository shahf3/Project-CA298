from django.db import models

class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField()
    author = models.TextField(max_length=20)
    genre = models.CharField(max_length=20, default="None")
    year = models.DateField()
    inventory = models.IntegerField()

class Customer(models.Model):
    id = models.AutoField(primary_key=True) # any id has to have this
    name = models.TextField()

class Borrow(models.Model):
    id = models.AutoField(primary_key=True) # auto increment field
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    due_date = models.DateField()
    returned = models.BooleanField(default=False)
    # author = models.TextField(null=True, blank=True) allow blanks for author
