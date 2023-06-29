// Obtener las regiones y cargarlas en el select correspondiente
fetch('https://apis.digital.gob.cl/dpa/regiones')
  .then(response => response.json())
  .then(data => {
    const regionSelect = document.getElementById('region');
    data.forEach(region => {
      const option = document.createElement('option');
      option.value = region.codigo;
      option.text = region.nombre;
      regionSelect.appendChild(option);
    });
  });

// Obtener las comunas de la región seleccionada y cargarlas en el select correspondiente
document.getElementById('region').addEventListener('change', () => {
  const regionCodigo = document.getElementById('region').value;
  fetch(https://apis.digital.gob.cl/dpa/regiones/${regionCodigo}/comunas)
    .then(response => response.json())
    .then(data => {
      const comunaSelect = document.getElementById('comuna');
      comunaSelect.innerHTML = '';
      data.forEach(comuna => {
        const option = document.createElement('option');
        option.value = comuna.codigo;
        option.text = comuna.nombre;
        comunaSelect.appendChild(option);
      });
    });
});

// Enviar el formulario
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const direccion = document.getElementById('direccion').value;
  const region = document.getElementById('region').value;
  const comuna = document.getElementById('comuna').value;
  // Aquí puedes agregar el código para enviar los datos del formulario a tu servidor
});

