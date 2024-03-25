from django.urls import path, include
from rest_framework import routers

from . import views

app_name = "accounts"

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
]