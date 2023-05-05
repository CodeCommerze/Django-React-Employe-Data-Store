from django.contrib import admin
from api.models import Employe


@admin.register(Employe)
class EmployeAdmin(admin.ModelAdmin):
    list_display=['username', 'email',]

    
