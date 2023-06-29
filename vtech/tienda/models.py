from django.db import models
from django.contrib.auth.hashers import make_password
from django import forms


# Create your models here.
class Hardware(models.Model):
    #idHardaware  = models.IntegerField(primary_key=True,max_length=10)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=8, decimal_places=3)

class Periferico(models.Model):
    #idPeripheral  = models.IntegerField(primary_key=True,max_length=10)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=8, decimal_places=3)

class servicio(models.Model):
    #idService  = models.IntegerField(primary_key=True,max_length=10)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=3)

class Cliente(models.Model):
    username = models.CharField(primary_key=True, max_length=10)
    email = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    password = models.CharField( max_length=128)

    def __str__(self):
        return str(self.username) + ' ' + str(self.email)

    




    """def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)"""
    

    """
    class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = User
        """