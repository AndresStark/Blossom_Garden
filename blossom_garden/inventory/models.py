from django.db import models

class Material(models.Model):
    name = models.CharField(max_length=200, default="Material")
    material_type = models.CharField(max_length=200, default="")
    description = models.CharField(max_length=1000, blank=True)
    measure_type = models.CharField(max_length=30, default="units")
    amount_per_measure = models.FloatField(default=0)
    price_per_measure = models.FloatField(default=0)
    # image = models.ImageField()
    tags = []

    def __str__(self):
        return str(self.name)


class Flower(models.Model):
    name = models.CharField(max_length=200, default="Material")
    quantity = models.IntegerField(default=0)
    price = models.FloatField(default=0)
    # image = models.ImageField()
    tags = []
    materials_quantity = []
    materials_price = []
    
    def __str__(self):
        return str(self.name)

    def addMaterial(material: Material, quantity: float):
        Flower.materials_quantity.append(
            {str(material.name): quantity}
        )
        Flower.materials_price.append(
            {str(material.name): (quantity * material.price_per_measure)}
        )
        print("Material {{material.name}} successfully added!")
        # No sé si este método funciona. Debería revisarse para mayor seguridad


class Foliage(models.Model):
    name = models.CharField(max_length=200, default="Material")
    quantity = models.IntegerField(default=0)
    price = models.FloatField(default=0)
    # image = models.ImageField()
    tags = []
    materials_quantity = []
    materials_price = []
    
    def __str__(self):
        return str(self.name)


class Arrangement(models.Model):
    name = models.CharField(max_length=200, default="Material")
    quantity = models.IntegerField(default=0)
    category = models.CharField(max_length=200, blank=True) # Change to array
    price = models.FloatField(default=0)
    # image = models.ImageField()
    tags = []
    flowers = []
    foliages = []
    
    def __str__(self):
        return str(self.name)