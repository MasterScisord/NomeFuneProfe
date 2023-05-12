<?php
session_start();

// Recupera los datos del formulario
$user = $_POST['user'];
$contraseña = $_POST['contraseña'];
$mail = $_POST['mail'];

//VALIDACION
  $datos_validos = true; 
  if (empty($_POST['user'])) {
      $datos_validos = false;
  }
  if (empty($_POST['contraseña'])) {
      $datos_validos = false; 
  }
  if (empty($_POST['mail']) || !filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
      $datos_validos = false; 
  }
  
  if ($datos_validos) {
      header("Location: login.html?registro_exitoso=true");
      exit();
  }  
  $_SESSION['error_message'] = "Por favor complete todos los campos.";
  header("Location: formulario.php");
  exit();
}
if(isset($_SESSION['success_message'])) {
    echo '<div class="alert alert-success">' . $_SESSION['success_message'] . '</div>';
    unset($_SESSION['success_message']);
}
if ($datos_validos) {
  header("Location: login.html?registro_exitoso=true");
  exit();
?>