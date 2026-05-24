from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .models import Order, OrderItem, TableReservation
import json

@csrf_exempt
@require_POST
def create_order(request):
    data = json.loads(request.body)

    order = Order.objects.create(
        customer_name=data['customer_name'],
        customer_phone=data['customer_phone'],
    )

    for item in data['items']:
        OrderItem.objects.create(
            order=order,
            menu_item_name=item['name'],
            quantity=item['quantity'],
            price_at_order=item['price'],
        )

    print(f"🍔 НОВЫЙ ЗАКАЗ #{order.id} | {order.customer_name} | {order.customer_phone}")
    for item in data['items']:
        print(f" - {item['name']} x{item['quantity']} = {item['price']}₽")

    return JsonResponse({'status': 'ok', 'order_id': order.id})


@csrf_exempt
@require_POST
def create_reservation(request):
    data = json.loads(request.body)

    TableReservation.objects.create(
        name=data['name'],
        phone=data['phone'],
        date=data['date'],
        time=data['time'],
        guests=data['guests'],
        zone=data['zone'],
        comment=data.get('comment', ''),
    )

    return JsonResponse({'status': 'ok'})