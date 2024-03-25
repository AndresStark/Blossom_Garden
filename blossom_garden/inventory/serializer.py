from rest_framework import serializers

from .models import Flower, Material

class FlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flower
        fields = '__all__'
        # fields = ('id', 'name', 'description')

        class FlowerMaterialSerializer(serializers.ModelSerializer):
            pass

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'