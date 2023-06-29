const formulario = document.querySelector('form');
const mensajeError = document.querySelector('#mensaje-error');

formulario.addEventListener('submit', (evento) => {
  if (!formulario.nombre.value || !formulario.correo.value) {
    evento.preventDefault(); // Evita que se envíe el formulario si falta algún campo
    mensajeError.textContent = 'No puedes dejar campos vacíos'; // Añade el mensaje de error
  }
});
