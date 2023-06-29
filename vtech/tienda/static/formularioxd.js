$(document).ready(function() {
    // Obtener las regiones desde la API de Regiones y Comunas de Chile
    $.getJSON("https://apis.digital.gob.cl/dpa/regiones", function(data) {
      // Agregar las opciones a la lista desplegable de regiones
      $.each(data, function(key, value) {
        $('#region').append('<option value="' + value.codigo + '">' + value.nombre + '</option>');
      });
    });
    
    // Obtener las comunas de la primera región desde la API de Regiones y Comunas de Chile
    $.getJSON("https://apis.digital.gob.cl/dpa/regiones/1/comunas", function(data) {
      // Agregar las opciones a la lista desplegable de comunas
      $.each(data, function(key, value) {
        $('#comuna').append('<option value="' + value.codigo + '">' + value.nombre + '</option>');
      });
    });
    
    // Actualizar las comunas cuando se seleccione una nueva región
    $('#region').change(function() {
      var regionId = $(this).val();
      $('#comuna').empty();
      $('#comuna').append('<option value="" disabled selected>Seleccione su comuna</option>');
      
      // Obtener las comunas de la región seleccionada desde la API de Regiones y Comunas de Chile
      $.getJSON("https://apis.digital.gob.cl/dpa/regiones/" + regionId + "/comunas", function(data) {
        // Agregar las opciones a la lista desplegable de comunas
        $.each(data, function(key, value) {
          $('#comuna').append('<option value="' + value.codigo + '">' + value.nombre + '</option>');
        });
      });
    });
    
    // Validar el formulario antes de enviarlo
    $('#formulario').submit(function(event) {
      var form = $(this);
      if (form[0].checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.addClass('was-validated');
    });
  });
  