from django.db import models

from inventory.model import data
from inventory.model.material import Material

class Foliage(models.Model):
    
    name = models.CharField(max_length=200, default="Foliage")
    quantity = models.IntegerField(default=0)
    price = models.FloatField(default=0)
    # image = models.ImageField()
    color = models.CharField(max_length=100, choices=data.COLOR, blank=True)
    tags = models.CharField(max_length=100, blank=True)
    cost = models.FloatField(default=0)
    
    def __str__(self):
        return str(self.name)
    
class FoliageMaterial(Foliage):
    materials = models.OneToOneField(Material, on_delete=models.CASCADE)
    material_quantity = models.IntegerField(default=0)
    subtotal_cost = models.FloatField(default=0)
