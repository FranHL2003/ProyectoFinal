<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "ciudades");

// Verificar la conexión
if (mysqli_connect_errno()) {
	die("Error de conexión a la base de datos: " . mysqli_connect_error());
}

// Recuperar el nombre ingresado en el formulario
$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);

// Borrar el registro de la base de datos
$sql = "DELETE FROM ciudades WHERE nombre = '$nombre'";

if (mysqli_query($conexion, $sql)) {
	echo "Registro eliminado exitosamente.";
} else {
	echo "Error al eliminar el registro: " . mysqli_error($conexion);
}

mysqli_close($conexion);