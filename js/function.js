$(document).ready(function () {

    //Funcionalidad de carga para lista de comidas (Ejemplo visto en clases)
    $("#btnCargar").click(function () {
      $.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
        function (data) {
          $.each(data.categories, function (i, item) {
            $("#tbody").append(
              "<tr><td>" +
                item.idCategory +
                "</td><td>" +
                item.strCategory +
                "</td><td><img src='" +
                item.strCategoryThumb +
                "'></td><td>" +
                item.strCategoryDescription +
                "</td></tr>"
            );
          });
        }
      );
    });
    //Relleno de select regiones
    //Se debe realizar con una funcionalidad de AJAX para gestiond de dominio cruzado
    //Error comun en consultas de api externas
    /* 
    Este tipo de llamadas de ajax es similar a un .get de jquery pero mas personalizado
    dentro de los valores personalizados encontramos
    url: URL en el cual se encuentra el API o servicio externo
    type: tipo de llamada que realizaremos (GET,POST,PUT,PATCH,DELETE)
    crossdomain: habilitacion de CORS o dominio cruzado , principal problematica al momento de usar servicios externos(Se bloquean en algunas llamadas)
    dataType: tipo de dato que se recibe en este caso es un jsonpadding or temas de formato
    sucess: funcion que se realizara en caso de que la llamada suceda de forma correcta (Codigo 200)
    error: funcion que se realizara en caso de que nuestra llamada falle (codigo 400/500)
    con esto tenemos completo control de la llamada externa
    */
    $.ajax({
      url: "https://apis.digital.gob.cl/dpa/regiones",
      type: "GET",
      crossDomain: true,
      dataType: "jsonp",
      success: function (data) {
        $.each(data, function (i, item) {
          $("#cboRegiones").append(
            "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
          );
        });
      },
      error: function (xhr, status, error) {
        console.log("Error al obtener las regiones: " + error);
      },
    });
    

    //Accionador de evento de tipo Change indicando que cada vez que se cambie el item de region se realizara lo siguiente

    $("#cboRegiones").change(function () {
        //Tomamos el valor del item seleccionado en el select de region
      var idRegion = $("#cboRegiones").val();
      //QUitamos el atributo de deshabilitado del select de provincias
      $("#cboProvincias").attr("disabled",false);
      //Vaciamos las opciones de provincias(Para evitar una sobrecarga de los mismos campos)
      $("#cboProvincias").empty();
      //Al quedar vacio quedaria en blanco ,m para evitar esto insertamos un registro base de tipo disable hidden que diga seleccione una opcion
      $("#cboProvincias").append("<option hidden disable>Seleccione una opcion</option>");
      //Mismo proceso para comunas y asi evitar la sobrecarga de campos y el correcto funcionamiento de los campos
      $("#cboComunas").empty();
      $("#cboComunas").append("<option hidden disable>Seleccione una opcion</option>");
      //Mismo proceso que con las regiones solo que en este caso insertaremos el ID obtenido de regiones en el URL de la api de regiones
      //URL Original: https://apis.digital.gob.cl/dpa/regiones/{codigo}/provincias
      $.ajax({
        url: "https://apis.digital.gob.cl/dpa/regiones/"+idRegion+"/provincias",
        type: "GET",
        crossDomain: true,
        dataType: "jsonp",
        success: function (data) {
          $.each(data, function (i, item) {
            $("#cboProvincias").append(
              "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
            );
          });
        },
        error: function (xhr, status, error) {
          console.log("Error al obtener las regiones: " + error);
        },
      });
    });

    //Replicamos el mismo proceso de la funcion anterior pero con el select de provincias
    $("#cboProvincias").change(function () {
      var idRegion = $("#cboRegiones").val();
      var idProvincia = $("#cboProvincias").val();
      $("#cboComunas").attr("disabled",false);
      $("#cboComunas").empty();
      $("#cboComunas").append("<option hidden disable>Seleccione una opcion</option>");
      //URL original https://apis.digital.gob.cl/dpa/regiones/{codigo}/provincias/{codigo}/comunas
      $.ajax({
        url: "https://apis.digital.gob.cl/dpa/regiones/"+idRegion+"/provincias/"+idProvincia+"/comunas",
        type: "GET",
        crossDomain: true,
        dataType: "jsonp",
        success: function (data) {
          $.each(data, function (i, item) {
            $("#cboComunas").append(
              "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
            );
          });
        },
        error: function (xhr, status, error) {
          console.log("Error al obtener las regiones: " + error);
        },
      });
    });
  });