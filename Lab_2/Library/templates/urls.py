from django.urls import path
from . import views
from .views import *

urlpatterns = [
   path('', views.index, name="index"),
   path('contact', views.contact, name="contact"),
   path('books', view_all_books, name='all_books'),
   path('books/<int:bookid>', view_single_book, name='single_book'),
   path('books/year/<str:year>', view_books_by_year, name="books_by_year"),
   path('books/category/<str:bookid>', view_books_by_category, name="by_catergory")   
]