from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt import views as jwt_views
from .views import *

urlpatterns = [
    path('api/home/',HomeView.as_view(), name='home'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/register/',RegisterView.as_view(), name='register')
]