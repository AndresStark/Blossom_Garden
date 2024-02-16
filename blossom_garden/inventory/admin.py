from django.contrib import admin
from .models import Material, Flower, Foliage, Arrangement

class MaterialAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "material_type",
        "description",
        "measure_type",
        "amount_per_measure",
        "price_per_measure",
        "color",
        "tags",
        ]
    
class FlowerAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "quantity",
        "price",
        "color",
        "tags",
        "cost",
        ]
    
    class FlowerMaterialAdmin(admin.ModelAdmin):
        fields = [
            "materials",
            "quantity",
            "subtotal_cost",
        ]
    
class FoliageAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "quantity",
        "price",
        "color",
        "tags",
        ]
    
    class FoliageMaterialAdmin(admin.ModelAdmin):
        fields = [
            "materials",
            "quantity",
            "subtotal_cost",
        ]
    
class ArrangementAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "quantity",
        "category",
        "price",
        ]
    
admin.site.register(Material, MaterialAdmin)
admin.site.register(Flower, FlowerAdmin)
admin.site.register(Foliage, FoliageAdmin)
admin.site.register(Arrangement, ArrangementAdmin)
