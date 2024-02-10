from django.urls import path, include
from rest_framework import routers

from . import views

app_name = "inventory"

router = routers.DefaultRouter()
router.register(r'inventory', views.InventoryView, 'inventory')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("", views.IndexView.as_view(), name="index"),
]
