from django.shortcuts import render, redirect, get_object_or_404

from .models import Hardware,Cliente
from .forms import ClienteForm
from .models import Cliente

def inicio(request):
    return render (request,"core/inicio.html")
def perifericos(request):
    return render (request,"core/perifericos.html")
def login(request):
    return render (request,"core/login.html")
def registro(request):
    return render (request,"core/registro.html")
def hardware(request):
    return render (request,"core/hardware.html")
def servicio(request):
    return render (request,"core/servicio.html")
def compra(request):
    return render (request,"core/compra.html")
def contacto(request):
    return render (request,"core/contacto.html")
def cliente_list(request):
    return render (request,"core/cliente_list.html")


def info(request):
    Hardwares=Hardware.object.all()
    context={"hardware": Hardwares}
    return render (request,"core/info",context)

#AGREGADO RECIENTEMENTE ELIMINAR DESPUES DE COMPROBAR SU FUNCIONAMIENTO
def cliente_create(request):
    form = ClienteForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('cliente_list')
    return render(request, 'app_name/cliente_form.html', {'form': form})

def cliente_list(request):
    queryset = Cliente.objects.all()
    context = {
        "object_list": queryset
    }
    return render(request, 'app_name/cliente_list.html', context)

def cliente_update(request, id=None):
    instance = get_object_or_404(Cliente, id=id)
    form = ClienteForm(request.POST or None, instance=instance)
    if form.is_valid():
        form.save()
        return redirect('cliente_list')
    return render(request, 'app_name/cliente_form.html', {'form': form})

def cliente_delete(request, id=None):
    instance = get_object_or_404(Cliente, id=id)
    if request.method == 'POST':
        instance.delete()
        return redirect('cliente_list')
    return render(request, 'app_name/cliente_confirm_delete.html', {'object': instance})

