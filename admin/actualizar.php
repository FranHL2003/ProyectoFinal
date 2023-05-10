<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "ciudades");

// Verificar la conexión
if (mysqli_connect_errno()) {
	die("Error de conexión a la base de datos: " . mysqli_connect_error());
}

// Recuperar los datos actualizados del formulario
$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$ciudad = mysqli_real_escape_string($conexion, $_POST['ciudad']);
$categoria = mysqli_real_escape_string($conexion, $_POST['categoria']);
$direccion = mysqli_real_escape_string($conexion, $_POST['direccion']);
$horario = mysqli_real_escape_string($conexion, $_POST['horario']);
$x = mysqli_real_escape_string($conexion, $_POST['x']);
$y = mysqli_real_escape_string($conexion, $_POST['y']);

// Actualizar el registro en la base de datos
$sql = "UPDATE ciudades SET ciudad = '$ciudad', categoria = '$categoria', direccion = '$direccion', horario = '$horario', x = '$x', y = '$y' WHERE nombre = '$nombre'";

if (mysqli_query($conexion, $sql)) {
	echo "Registro actualizado exitosamente.";
} else {
	echo "Error al actualizar el registro: " . mysqli_error($conexion);
}

mysqli_close($conexion);
?>
