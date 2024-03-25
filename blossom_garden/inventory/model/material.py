from django.db import models

from inventory.model import data

class Material(models.Model):

    name = models.CharField(max_length=200, default="Material")
    material_type = models.CharField(max_length=200, default="")
    description = models.CharField(max_length=1000, blank=True)
    measure_type = models.CharField(max_length=30, default="units")
    amount_per_measure = models.FloatField(default=0)
    price_per_measure = models.FloatField(default=0)
    # image = models.ImageField()
    color = models.CharField(max_length=100, choices=data.COLOR, blank=True)
    tags = models.CharField(max_length=100, choices=data.MATERIAL_TAGS, blank=True)

    def __str__(self):
        return str(self.name)