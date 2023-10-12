from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import *
from rest_framework import viewsets
from .models import *
from .serializers import *

import datetime

def view_all_books(request):
    all_books = Book.objects.all()
    # list of all used genres to automatically add a filter button when a new genre is added
    genres = list(all_books.values_list('genre', flat=True).distinct())
    return render(request, 'all_books.html', {'books':all_books, 'genres':genres})


def view_genre_books(request, genre_val):
    all_books = Book.objects.all()
    # list of all used genres to automatically add a filter button when a new genre is added
    genres = list(all_books.values_list('genre', flat=True).distinct())
    genre_books = all_books.filter(genre=genre_val)
    return render(request, 'all_books.html', {'books':genre_books, 'genres':genres})


def view_single_book(request, bookid):
    # current date to be used to calculate if a borrow is due
    current_date = datetime.datetime.now().date()
    single_book = get_object_or_404(Book, id=bookid)
    borrows = Borrow.objects.filter(book=bookid, is_returned=False)
    returned = Borrow.objects.filter(book=bookid, is_returned=True)
    return render(request, 'single_book.html', {'book':single_book, 'borrows': borrows, 'returned': returned, 'current_date':current_date})

def view_customer(request, customerid):
    current_date = datetime.datetime.now().date()
    customer = get_object_or_404(Customer, id=customerid)
    borrows = Borrow.objects.filter(customer=customerid, is_returned=False)
    returned = Borrow.objects.filter(customer=customerid, is_returned=True)
    return render(request, 'customer_info.html', {'customer':customer, 'borrows': borrows, 'returned': returned, 'current_date':current_date})


def api_add(request):
	num1 = float(request.GET.get('num1',1)) 
	num2 = float(request.GET.get('num2',1))
	added = num1 + num2
	resp_dict = {'result':added}
	return JsonResponse(resp_dict) # return the dict as a json respone

def api_subtract(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    subtracted = num1 - num2
    resp_dict = {'result':subtracted}
    return JsonResponse(resp_dict)

def api_divide(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    divided = num1 // num2
    resp_dict = {'result':divided}
    return JsonResponse(resp_dict)

def api_multiply(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    multiplied = num1 * num2
    resp_dict = {'result':multiplied}
    return JsonResponse(resp_dict)

def api_exponential(request):
    num1 = float(request.GET.get('num1', 1))
    num2 = float(request.GET.get('num2', 1))
    exponential = num1 ** num2
    resp_dict = {'result':exponential}
    return JsonResponse(resp_dict)

class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class BorrowViewSet(viewsets.ModelViewSet):
    serializer_class = BorrowSerializer
    queryset = Borrow.objects.all()
