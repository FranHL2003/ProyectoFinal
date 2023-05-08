<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ciudades";

function getPoisByProvince($province){

  global $servername;
  global $username;
  global $password;
  global $dbname;
// Crea una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica si hay errores en la conexión
if ($conn->connect_error) {
  die("La conexión a la base de datos ha fallado: " . $conn->connect_error);
}

// Consulta los datos de la tabla ciudades que contengan 'jaen' en el ID
$sql = "SELECT ciudad, id, nombre, direccion, telefono, categoria, horario, ver, x, y FROM ciudades WHERE ciudad LIKE '%".$province."%'";
$result = $conn->query($sql);

// Verifica si la consulta ha devuelto resultados
if ($result->num_rows > 0) {
  // Crea un array para almacenar los resultados de la consulta
  $ciudades = array();

  // Recorre los resultados de la consulta y los almacena en el array
  while($row = $result->fetch_assoc()) {
    $ciudades[] = $row;
  }

  // Convierte el array a formato JSON
  $json = json_encode($ciudades);

  // Devuelve el resultado en formato JSON
  return $json;
} else {
  return null;
}

// Cierra la conexión a la base de datos
$conn->close();

}
 echo getPoisByProvince($_GET["province"]);
// fetch("localhost/proyecto/test.php?province="+ $("#q").value() ).then()...
//echo "<script> var pois = ".getPoisByProvince($_GET["province"]).";</script>"

?>
