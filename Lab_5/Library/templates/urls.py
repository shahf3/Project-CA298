from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'customer', views.CustomerViewSet)
router.register(r'book', views.BookViewSet)
router.register(r'borrows', views.BorrowViewSet)

urlpatterns = [
    path('', views.view_all_books, name = 'index'),
    path('books/<str:genre_val>', views.view_genre_books, name = 'genre_books'),
    path('books/view/<int:bookid>', views.view_single_book, name = 'single_book'),
    path('customers/<int:customerid>', views.view_customer, name = 'customer_info'),
    path('add', views.api_add, name='api_add'),
    path('multiply', views.api_multiply, name='api_multiply'),
    path('subtract', views.api_subtract, name='api_subtract'),
    path('divide', views.api_divide, name='api_divide'),
    path('exponent', views.api_exponential, name='api_exponential'),
	path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]
