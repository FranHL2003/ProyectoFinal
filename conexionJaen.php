<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ciudades";

// Crea la conexión con la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica si se ha establecido la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los datos de la tabla ciudades que contengan "jaen" en el campo id
$sql = "SELECT * FROM ciudades WHERE id LIKE '%jaen%'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Imprime los datos de cada fila
    while($row = $result->fetch_assoc()) {
        echo "Nombre: " . $row["nombre"]. " - Dirección: " . $row["direccion"].  " - Horario: " . $row["horario"]." - Teléfono: " . $row["telefono"]." - Categoria: " . $row["categoria"]." - Ver: " . $row["ver"]." - Latitud: " . $row["latitud"]." - Longitud: " . $row["longitud"]. "<br>";
    }
} else {
    echo "No se encontraron resultados.";
}

// Cierra la conexión con la base de datos
$conn->close();
?>