<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Formulario Bootstrap con lista desplegable y API</title>
<!-- Cargar Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>

<div class="container">
	<h2>Formulario de contacto</h2>
	<form id="contact-form">
		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="nombre">Nombre:</label>
				<input type="text" class="form-control" id="nombre" name="nombre" required>
			</div>
			<div class="form-group col-md-6">
				<label for="apellido">Apellido:</label>
				<input type="text" class="form-control" id="apellido" name="apellido" required>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="rut">RUT:</label>
				<input type="text" class="form-control" id="rut" name="rut" required>
			</div>
			<div class="form-group col-md-6">
				<label for="region">Región:</label>
				<select class="form-control" id="region" name="region" required>
					<option value="">Seleccionar una región</option>
				</select>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="ciudad">Ciudad:</label>
				<select class="form-control" id="ciudad" name="ciudad" required>
					<option value="">Seleccionar una ciudad</option>
				</select>
			</div>
			<div class="form-group col-md-6">
				<label for="calle">Calle:</label>
				<input type="text" class="form-control" id="calle" name="calle" required>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="numero">Número:</label>
				<input type="text" class="form-control" id="numero" name="numero" required>
			</div>
			<div class="form-group col-md-6">
				<label for="codigo_postal">Código Postal:</label>
				<input type="text" class="form-control" id="codigo_postal" name="codigo_postal" required>
			</div>
		</div>
		<div class="form-group">
			<label for="mensaje">Mensaje:</label>
			<textarea class="form-control" id="mensaje" name="mensaje" rows="5" required></textarea>
		</div>
		<button type="submit" class="btn btn-primary">Enviar</button>
	</form>
</div>


<!-- Cargar jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>


<!-- Cargar Bootstrap JS -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>


<!-- Agregar lógica del formulario -->
<script>