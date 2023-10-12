from django.contrib import admin
from django.urls import path, include
from .views import *

from django.urls import path
from . import views

urlpatterns = [
   path('books', view_all_books, name='all_books'),
   path('books/<int:bookid>', view_single_book, name='single_book'),
   path('books/author/<str:author>', view_books_by_author, name="books/author"),
   path('books/genre/<str:genre>', view_books_by_genre, name="books/genre"),
   path('customer/<int:customerid>', view_customer, name = 'customer'),
]
