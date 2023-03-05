<?php

// Angi databaseinformasjon
$servername = "tekaas.database.windows.net";
$username = "CloudSA6cbb0095";
$password = "Pernille1102";
$dbname = "AOF";

// Opprette tilkobling
$conn = new mysqli($servername, $username, $password, $dbname);

// Sjekk tilkoblingen
if ($conn->connect_error) {
  die("Tilkoblingen mislyktes: " . $conn->connect_error);
}

// Hente data fra skjemaet
$turid = $_POST['turid'];
$dato = $_POST['dato'];
$ankomsttid = $_POST['ankomsttid'];
$lossestart = $_POST['lossestart'];
$losseferdig = $_POST['losseferdig'];
$kommentar = $_POST['kommentar'];

// Sette inn data i databasen
$sql = "INSERT INTO AOF (turid, dato, ankomst, Start_lossing, Ferdig_lossing, kommentar) VALUES ('$turid', '$dato', '$ankomsttid', '$lossestart', '$losseferdig', '$kommentar')";

if ($conn->query($sql) === TRUE) {
  echo "Data er lagt til i databasen.";
} else {
  echo "Feil: " . $sql . "<br>" . $conn->error;
}

// Lukke tilkobling
$conn->close();

?>
