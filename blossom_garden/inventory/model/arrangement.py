from django.db import models

from inventory.model import data

class Arrangement(models.Model):
    
    name = models.CharField(max_length=200, default="Material")
    quantity = models.IntegerField(default=0)
    category = models.CharField(max_length=100, blank=True, choices=data.CATEGORY)
    price = models.FloatField(default=0)
    # image = models.ImageField()
    tags = models.CharField(max_length=100, blank=True)
    flowers = []
    foliages = []
    
    def __str__(self):
        return str(self.name)