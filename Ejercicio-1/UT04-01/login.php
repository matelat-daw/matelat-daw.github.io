<?php
$email = $_POST["email"];
$phone = $_POST["phone"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenida</title>
</head>
<body>
    <?php
        echo "<h1>Hola $email con Número de Teléfono: $phone.</h1>";
    ?>
</body>
</html>