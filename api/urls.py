from django.urls import path
from .views import *
urlpatterns = [
    path('api/',apiView , name="home"),
    path('add/', add_emplye, name = "add"),
    path('update/<int:pk>' , update_employe, name="update"),
    path('delete/<int:pk>' , delete_employe, name="delete"),
]
