from django.shortcuts import render
from rest_framework.decorators import api_view , parser_classes
from api.models import Employe
from api.serializer import EmployeSerializer
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser,FormParser

@api_view(['GET'])
def apiView(request):
     if request.method == 'GET':
        employe = Employe.objects.all()
        serializer = EmployeSerializer(employe,many=True)
        return Response(serializer.data)

@api_view(['POST'])
# @parser_classes([MultiPartParser ,FormParser])
def add_emplye(request):
    print(request.data)
    if request.method == 'POST':
        serializer = EmployeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        
    return Response(serializer.data)


@api_view(["Patch"])
def update_employe(request , pk):
    queryset = Employe.objects.get(pk=pk)
    serializer = EmployeSerializer(queryset , request.data , partial=True)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(["DELETE"])
def delete_employe(request,pk):
    queryset = Employe.objects.get(pk=pk)

    queryset.delete()
    return Response({"msg": "Deleted"})