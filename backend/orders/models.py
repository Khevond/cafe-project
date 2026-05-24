from django.db import models


# МЕНЮ
class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=50)
    image = models.ImageField(upload_to='menu/', blank=True, null=True)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} - {self.price}₽"


#ЗАКАЗ (корзина)
class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Ожидает'),
        ('confirmed', 'Подтверждён'),
        ('done', 'Выполнен'),
    ]
    customer_name = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=20)
    status = models.CharField(max_length=20,
                                choices=STATUS_CHOICES,
                                default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def get_total(self):
        return sum(item.get_subtotal() for item in self.items.all())

    def __str__(self):
        return f"Заказ #{self.id} - {self.customer_name}"


# ───── ПОЗИЦИИ ЗАКАЗА ─────
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    menu_item_name = models.CharField(max_length=100) # просто строка
    quantity = models.PositiveIntegerField(default=1)
    price_at_order = models.DecimalField(max_digits=8, decimal_places=2)

    def get_subtotal(self):
        return self.price_at_order * self.quantity

    def __str__(self):
        return f"{self.menu_item.name} x{self.quantity}"


# ───── БРОНИРОВАНИЕ СТОЛА ─────
GUESTS_CHOICES = [
    ('1', '1 человек'),
    ('2', '2 человека'),
    ('3-4', '3-4 человека'),
    ('5-6', '5-6 человек'),
    ('7+', '7+'),
]

ZONE_CHOICES = [
    ('hall', 'В зале'),
    ('window', 'У окна'),
    ('terrace', 'На террасе'),
]

class TableReservation(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    guests = models.CharField(max_length=10, choices=GUESTS_CHOICES)
    zone = models.CharField(max_length=20, choices=ZONE_CHOICES)
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.date} {self.time}"