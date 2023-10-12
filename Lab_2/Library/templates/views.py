from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.shortcuts import get_object_or_404
# Create your views here.

def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

#from django.shortcuts import get_object_or_404
def view_single_book(request, bookid):
	single_book = get_object_or_404(Book, id=bookid)
	return render(request, 'single_book.html', {'books':single_book})

def view_books_by_year(request, year):
    books_by_year = Book.objects.all()
    # return them as a list to the front-end
    return render(request,'book_year.html', {'books':books_by_year, 'year': year})

def view_books_by_category(request, bookid):
    by_category = Book.objects.filter(category= bookid)
    return render(request, 'all_books.html', {'books': by_category})
