from django.urls import path
from calapp import views

urlpatterns = [
    path('', views.index, name='index'),
]