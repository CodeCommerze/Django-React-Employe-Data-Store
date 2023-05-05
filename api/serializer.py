from rest_framework import serializers
from api.models import Employe

class EmployeSerializer(serializers.ModelSerializer):

    password = serializers.CharField(max_length=255,write_only=True)
    class Meta:
        model = Employe
        fields = '__all__'

      
    def validate(self,data):
            username = data.get('usename')
          
           
            if username == " ":
                raise serializers.ValidationError("Username must be set")
    
            return data
