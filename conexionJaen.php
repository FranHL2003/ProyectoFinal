<?php

$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

// Crea la conexión
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifica si la conexión se ha establecido correctamente
if (!$conn) {
  die("Error de conexión: " . mysqli_connect_error());
}

// Crea una consulta SQL para seleccionar los datos que contienen "jaen" en el campo id
$sql = "SELECT * FROM ciudades WHERE id LIKE '%jaen%'";

// Ejecuta la consulta y almacena el resultado en una variable
$resultado = mysqli_query($conn, $sql);

// Recorre cada fila del resultado
while($fila = mysqli_fetch_assoc($resultado)) {
    // Muestra los datos de la fila
    echo "ID: " . $fila["id"] . "<br>";
    echo "Nombre: " . $fila["nombre"] . "<br>";
    echo "Categoría: " . $fila["categoria"] . "<br>";
    echo "Dirección: " . $fila["direccion"] . "<br>";
    echo "Teléfono: " . $fila["telefono"] . "<br>";
    echo "Ver: " . $fila["ver"] . "<br>";
    echo "Longitud: " . $fila["longitud"] . "<br>";
    echo "Latitud: " . $fila["latitud"] . "<br><br>";
  }
  

//cerrar conexion
mysqli_close($conn);




?>