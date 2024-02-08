from django.db import models

class Material(models.Model):
    name = models.CharField(max_length=200, default="Material")
    material_type = models.CharField(max_length=200, default="")
    description = models.CharField(max_length=1000, default="Description")
    measure_type = models.CharField(max_lenght=30, default="units")
    amount_per_measure = models.FloatField(default=0)
    price_per_measure = models.FloatField(default=0)

    def __str__(self):
        return str(self.name)
    
class Flower(models.Model):
    name = models.CharField(max_length=200, default="Material")
    quantity = models.IntegerField(default=0)
    materials_quantity = []
    materials_price = []
    flower_type = models.CharField(max_length=300, default="Rose")
    price_per_unit = models.FloatField(default=0)

    def addMaterial(material: Material, quantity_per_unit: float):
        Flower.materials_quantity.append(
            {str(material.name): quantity_per_unit}
        )
        Flower.materials_price.append(
            {str(material.name): (quantity_per_unit * material.price_per_measure)}
        )
        print("Material {{material.name}} successfully added!")
        # No sé si este método funciona. Debería revisarse para mayor seguridad