from django.contrib import admin
from rest_framework.documentation import include_docs_urls
from django.urls import path, include

urlpatterns = [
    path('', include('inventory.urls')),
    path("docs/", include_docs_urls(title="Inventory API")),
    path('admin/', admin.site.urls),
]
