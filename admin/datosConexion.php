<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "ciudades");

// Verificar la conexión
if (mysqli_connect_errno()) {
	die("Error de conexión a la base de datos: " . mysqli_connect_error());
}

// Recuperar los valores ingresados en el formulario
$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$ciudad = mysqli_real_escape_string($conexion, $_POST['ciudad']);
$categoria = mysqli_real_escape_string($conexion, $_POST['categoria']);
$direccion = mysqli_real_escape_string($conexion, $_POST['direccion']);
$horario = mysqli_real_escape_string($conexion, $_POST['horario']);
$ver = mysqli_real_escape_string($conexion, $_POST['ver']);
$x = mysqli_real_escape_string($conexion, $_POST['x']);
$y = mysqli_real_escape_string($conexion, $_POST['y']);



// Agregar el registro a la base de datos
$sql = "INSERT INTO ciudades (nombre, ciudad, categoria, direccion, horario, ver, x, y) 
        VALUES ('$nombre', '$ciudad', '$categoria', '$direccion', '$horario', '$ver', '$x', '$y')";

if (mysqli_query($conexion, $sql)) {
    echo "Registro agregado exitosamente.";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
}

mysqli_close($conexion);
