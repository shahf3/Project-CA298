from django.db import models
from django.db import models
from datetime import datetime

class Topping(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return f'{self.name}'

class Crust(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return f'{self.name}'

class Cheese(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

class Size(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

class Sauce(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    toppings = models.ManyToManyField(Topping, blank=True, related_name="topping")
    cheese = models.ForeignKey(Cheese, on_delete=models.RESTRICT)
    size = models.ForeignKey(Size, on_delete=models.RESTRICT)
    sauce = models.ForeignKey(Sauce, on_delete=models.RESTRICT)
    crust = models.ForeignKey(Crust, on_delete=models.RESTRICT)
    
    def __str__(self):
        return "{} pizza with, {} sauce, {} cheese, {} crust and {} as toppings.".format(self.size, self.sauce, self.cheese,self.crust, self.toppings)

#class ExpiryDateField(models.CharField):
#    description = "Expiry date in YYYYMMDD format"

#    def to_python(self, value):
#        if isinstance(value, datetime):
#            return value.strftime('%Y%m%d')
#        return value#
#
#    def from_db_value(self, value, expression, connection):
#        return self.to_python(value)

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    address = models.TextField()
    email = models.EmailField()
    card_number = models.CharField(max_length=16, default="12334545")
    expiry_date = models.CharField(max_length=8)
    cvv = models.CharField(max_length=3, default=123)

    def __str__(self):
        return "{}, {}".format(self.name, self.card_number)
