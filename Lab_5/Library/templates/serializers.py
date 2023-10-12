from rest_framework import serializers
from .models import *

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'name']

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'author', 'year', 'price', 'title', 'category', 'synopsis']

class BorrowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Borrow
        fields = ['id', 'customer', 'book', 'due_date', 'is_returned']
