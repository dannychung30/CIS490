from django.urls import path
from .views import process_csv, index

urlpatterns = [
    path('', index, name='index'),
    path('process_csv/', process_csv, name='process_csv')
]
