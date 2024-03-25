from django.contrib import admin

from inventory.models import Material, Flower, FlowerMaterial, Foliage, FoliageMaterial, Arrangement

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

    class FlowerMaterialAdmin(admin.ModelAdmin):
        fields = [
            "materials",
            "material_quantity",
            "subtotal_cost",
        ]

    fields = [
        "name",
        "quantity",
        "price",
        "color",
        "tags",
        "cost",
        ]
    
    model = [
        "FlowerMaterialAdmin"
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
            "material_quantity",
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
# admin.site.register(FlowerMaterial, FlowerMaterialAdmin)
admin.site.register(Foliage, FoliageAdmin)
# admin.site.register(FoliageMaterial, FoliageMaterialAdmin)
admin.site.register(Arrangement, ArrangementAdmin)
