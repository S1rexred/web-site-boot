from django.shortcuts import render 
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated 
from rest_framework_simplejwt.tokens import RefreshToken 
from rest_framework import status 
from .serializers import UserSerializer, AuthSerializer
from django.views.generic import TemplateView 
from rest_framework import permissions, generics
from rest_framework.authtoken.models import Token

# Create your views here. 

class HomeView(APIView): 
    permission_classes = (IsAuthenticated,) 

    def get(self, request): 
        # Исправлено форматирование строки для корректного отображения имени пользователя
        content = {"message": f"welcome to page {request.user}"}
        return Response(content) 

class LogoutView(APIView):  # Изменено имя класса для соблюдения PEP8
    permission_classes = (IsAuthenticated,) 

    def post(self, request): 
        try: 
            refresh_token = request.data['refresh_token'] 
            token = RefreshToken(refresh_token) 
            token.blacklist() 
            return Response(status=status.HTTP_205_RESET_CONTENT) 
        except KeyError:  # Обработка конкретного исключения
            return Response({"error": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST) 
        except Exception as e: 
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST) 

class RegisterView(APIView): 
    def post(self, request): 
        serializer = UserSerializer(data=request.data) 
        serializer.is_valid(raise_exception=True) 
        serializer.save() 
        return Response(serializer.data, status=status.HTTP_201_CREATED)  # Добавлен статус 201

class HomePageView(TemplateView): 
    template_name = 'index.html'  # Убедитесь, что файл index.html существует в вашем шаблоне

class LoginView(generics.GenericAPIView):
    serializer_class = AuthSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
