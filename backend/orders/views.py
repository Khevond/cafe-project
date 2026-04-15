from django.http import JsonResponse
import json
from .models import Order
from datetime import datetime

def create_order(request):
    if request.method == "POST":
        data = json.loads(request.body)

        name = data.get("name")
        phone = data.get("phone")

        # дата (дд.мм.гггг)
        raw_date = data.get("date")
        date = datetime.strptime(raw_date, "%d.%m.%Y").date()

        # время
        raw_time = data.get("time")
        time = datetime.strptime(raw_time, "%H:%M").time()

        guests = data.get("guests")
        zone = data.get("zone")

        Order.objects.create(
            name=name,
            phone=phone,
            date=date,
            time=time,
            guests=guests,
            zone=zone
        )

        return JsonResponse({"message": "ok"})