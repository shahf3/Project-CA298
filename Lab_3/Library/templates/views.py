from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404
import datetime
def view_all_books(request):
    books = Book.objects.all()
    if 'search' in request.GET:
        search_query = request.GET['search']
        books = books.filter(title__icontains=search_query)
    if 'genre' in request.GET:
        genre_query = request.GET['genre']
        books = books.filter(genre__iexact=genre_query)
    if 'author' in request.GET:
        author_query = request.GET['author']
        books = books.filter(author__icontains=author_query)
    if 'year' in request.GET:
        year_query = request.GET['year']
        books = books.filter(year__icontains=year_query)
    return render(request, 'books.html', {'books': books,'genre': Book.objects.values_list('genre', flat=True).distinct()})

def view_single_book(request, bookid):
    single_book = get_object_or_404(Book, id=bookid)
    date = datetime.datetime.now().date()
    borrowed = Borrow.objects.filter(book=bookid, returned=False)
    returned = Borrow.objects.filter(book=bookid, returned=True)
    return render(request, 'single_book.html', {'book':single_book, 'borrowed': borrowed, 'returned': returned, 'date':date})

def view_books_by_author(request, author):
    books = Book.objects.filter(author=author)
    return render(request, 'books.html', {'books': books})

def view_books_by_genre(request, genre):
    books = Book.objects.filter(genre=genre)
    return render(request, 'books.html', {'books': books})

def view_customer(request, customerid):
    date = datetime.datetime.now()
    customer = get_object_or_404(Customer, id=customerid)
    borrowed = Borrow.objects.filter(customer=customerid, returned=False)
    returned = Borrow.objects.filter(customer=customerid, returned=True)
    return render(request, 'customer.html', {'customer':customer, 'borrowed':borrowed, 'returned':returned, 'Todays date and time':date})
