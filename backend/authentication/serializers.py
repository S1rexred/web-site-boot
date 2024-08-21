# accounts/serializers.py
from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


    from django.contrib.auth import authenticate
from rest_framework import serializers

class AuthSerializer(serializers.Serializer): 
    email = serializers.EmailField()  # Изменил на EmailField для валидации email
    password = serializers.CharField(write_only=True)  # Убедитесь, что пароль не выводится в ответах

    def validate(self, attrs): 
        user = authenticate(**attrs) 
        if user is None: 
            raise serializers.ValidationError({'non_field_errors': ['Invalid credentials']}) 
        return user
