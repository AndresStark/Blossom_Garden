from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render

from django.views import generic

class IndexView(generic.ListView):
    template_name: str = 'index.html'
    context_object_name = "index"

    def get_queryset(self):
        return "Hola mundo"