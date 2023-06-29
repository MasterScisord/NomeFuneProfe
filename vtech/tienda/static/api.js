$(document).ready(function() {
    // Cargar lista de regiones desde la API
    $.ajax({
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries/CL/regions",
    headers: {
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key": "TU-API-KEY-AQUI"
    },
    type: "GET",
    success: function(data) {
    // Agregar opciones al select de regiones
    var select = $("#region");
    $.each(data.data, function(index, value) {
    select.append("<option value='" + value.name + "'>" + value.name + "</option>");
    });
    },
    error: function() {
    alert("Error al cargar las regiones.");
    }
    });
    
        // Cargar lista de ciudades desde la API al seleccionar una región
        $("#region").change(function() {
            var region = $(this).val();
            var select = $("#ciudad");
            select.empty().append("<option value=''>Seleccionar una ciudad</option>");
            if (region !== "") {
                $.ajax({
                    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries/CL/regions/" + region + "/cities",
                    headers: {
                        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                        "x-rapidapi-key": "TU-API-KEY-AQUI"
                    },
                    type: "GET",
                    success: function(data) {
                        // Agregar opciones al select de ciudades
                        $.each(data.data, function(index, value) {
                            select.append("<option value='" + value.name + "'>" + value.name + "</option>");
                        });
                    },
                    error: function() {
                        alert("Error al cargar las ciudades.");
                    }
                });
            }
        });
    
    
        // Enviar formulario
        $("#contact-form").submit(function(event) {
            event.preventDefault();
            // Obtener datos del formulario
            var formData = {
                "nombre": $("#nombre").val(),
                "apellido": $("#apellido").val(),
                "rut": $("#rut").val(),
                "region": $("#region").val(),
                "ciudad": $("#ciudad").val(),
                "calle": $("#calle").val(),
                "numero": $("#numero").val(),
                "codigo_postal": $("#codigo_postal").val(),
                "mensaje": $("#mensaje").val()
            };
            // Enviar datos a una URL de destino
            $.ajax({
                url: "TU-URL-DE-DESTINO-AQUI",
                type: "POST",
                data: formData,
                success: function(response) {
                    alert("El formulario se envió correctamente.");
                    $("#contact-form")[0].reset();
                },
                error: function() {
                    alert("Error al enviar el formulario.");
                }
            });
        });
    });