from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render

from .serializer import FlowerSerializer, MaterialSerializer
from .models import Flower, Material

from rest_framework import viewsets

from django.views import generic


class FlowerView(viewsets.ModelViewSet):
    serializer_class = FlowerSerializer
    queryset = Flower.objects.all()

class MaterialView(viewsets.ModelViewSet):
    serializer_class = MaterialSerializer
    queryset = Material.objects.all()


class IndexView(generic.ListView):
    template_name: str = 'index.html'
    context_object_name = "index"

    def get_queryset(self):
        return "Hola mundo"