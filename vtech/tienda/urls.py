from django.urls import path, include
from .views import inicio, perifericos,servicio,compra,login,hardware,registro,contacto,cliente_list,cliente_create,cliente_delete,cliente_update

tienda = 'tienda'
urlpatterns=[
    path('', inicio, name="inicio"),
    path('perifericos', perifericos, name="perifericos"),
    path('servicio', servicio, name="servicio"),
    path('contacto', contacto, name="contacto"),
    path('compra', compra, name="compra"),
    path('login', login, name="login"),
    path('registro', registro, name="registro"),
    path('hardware', hardware, name="hardware"),
    path('cliente/', cliente_list, name='cliente_list'),
    path('cliente/create/', cliente_create, name='cliente_create'),
    path('cliente/<str:id>/update/', cliente_update, name='cliente_update'),
    path('cliente/<str:id>/delete/',cliente_delete, name='cliente_delete'),

]



