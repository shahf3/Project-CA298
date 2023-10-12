from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *

admin.site.register(Topping)
admin.site.register(Cheese)
admin.site.register(Sauce)
admin.site.register(Size)
admin.site.register(Crust)

admin.site.register(Pizza)
admin.site.register(Customer)
