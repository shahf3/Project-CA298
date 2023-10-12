from django.urls import path
from . import views

urlpatterns = [
   path('', views.index, name="index"),
   path('index.html', views.index, name="index"),
   path('contact.html', views.contact, name="contact"),
   path('create_pizza.html', views.create_pizza, name="create_pizza.html"),
   path('customer_details.html', views.customer_details, name="customer_details"),
   path('yourorder.html/', views.yourorder, name = "yourorder.html"),
]
