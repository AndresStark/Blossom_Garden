from django.contrib import admin
from .models import Material, Flower

class MaterialAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "material_type",
        "description",
        "measure_type",
        "amount_per_measure",
        "price_per_measure"
        ]
    
class FlowerAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "quantity",
        "flower_type",
        "price_per_unit"
        ]
    
admin.site.register(Material, MaterialAdmin)
admin.site.register(Flower, FlowerAdmin)
