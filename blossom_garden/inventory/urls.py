from django.urls import path, include
from rest_framework import routers

from . import views

app_name = "inventory"

router_flower = routers.DefaultRouter()
router_flower.register(r'flower', views.FlowerView, 'flower')

router_material = routers.DefaultRouter()
router_material.register(r'material', views.MaterialView, 'material')


urlpatterns = [
    path("api/v1/", include(router_flower.urls)),
    path("api/v1/", include(router_material.urls)),
    path("", views.IndexView.as_view(), name="index"),
]
