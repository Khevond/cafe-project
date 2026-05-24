from django.contrib import admin
from .models import Order, OrderItem, TableReservation, MenuItem

admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(TableReservation)
admin.site.register(MenuItem)
