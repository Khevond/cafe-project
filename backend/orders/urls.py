from django.urls import path
from . import views

urlpatterns = [
    path('api/order/', views.create_order),
    path('api/reservation/', views.create_reservation),
]