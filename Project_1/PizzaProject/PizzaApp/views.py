from django.shortcuts import render,redirect
from .views import *
from .forms import *
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from .models import *

def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def create_pizza(request):
 
    user = request.user
    if request.method == "POST":
        form = PizzaForm(request.POST, request.FILES)
        if form.is_valid():
            form.instance.user = user
            form.save()
            return redirect('customer_details.html')
        else:
            return render(request, 'create_pizza.html', {'form':form})
    else:
        # Normal get request, user wants to see the form
        form = PizzaForm()
        return render(request, 'create_pizza.html', {'form':form})


def customer_details(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('yourorder.html')
    else:
        form = CustomerForm()
    return render(request, 'customer_details.html', {'form': form})

def yourorder(request):
    all_pizza = Pizza.objects.latest('id')
    return render(request, 'yourorder.html', {'pizza': all_pizza})
