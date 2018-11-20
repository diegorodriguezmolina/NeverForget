<?php



function openBD(){
    $servername = "localhost";
$username = "root";
$password = "";
    $conn = new PDO("mysql:host=$servername;dbname=hoteles_dwes;charset=utf8", $username, $password);
    //control de excepciones
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $conn;
}

function closeBD(){

    return null;

}

function errorCode($e){
    if(!empty($e->errorInfo[1])){
        switch ($e->errorInfo[1]) {
            case '1062':
                $mensaje = "Registro duplicado";
                break;
            
            case '1451':
                $mensaje = "Registro con elementos relacionados";
                break;
            
            default:
                # code...
                break;
        }

    }
    return $mensaje;
}
function insertarCiudad($id_ciudad, $nombre){
    try{
        $conn = openBD();
        $sentencia = $conn->prepare("INSERT INTO ciudades VALUES (:id_ciudad, :nombre)");
    
        $sentencia->bindParam(':id_ciudad', $id_ciudad);
        $sentencia->bindParam(':nombre', $nombre);
    
        $sentencia->execute();
        $_SESSION['mensaje'] = "Ciudad introducida correctamente"; 
    }catch(PDOException $e){
        $_SESSION['error']= errorCode($e);
        $ciudad['id_ciudad'] = $id_ciudad;
        $ciudad['nombre'] = $nombre;
        $_SESSION['ciudad'] = $ciudad;
    }
    
    $conn = closeBD();

}

function verCiudades(){
    $conn= openBD();
    $sentencia = $conn->prepare("SELECT * FROM ciudades"); 
    $sentencia->execute();

    $resultado = $sentencia -> fetchAll();
    $conn = closeBD();

    return $resultado;
}

function verCiudadId($id){
    $conn= openBD();
    $sentencia = $conn->prepare("SELECT * FROM ciudades WHERE id_ciudad = $id"); 
    $sentencia->execute();

    $resultado = $sentencia -> fetchAll();
    $conn = closeBD();

    return $resultado[0];
}
function borrarCiudad($id){
    $conn= openBD();
 
    $conn->exec("DELETE FROM ciudades WHERE id_ciudad= $id");

    $conn = closeBD();
}

function modificarCiudad($id, $nombre){
    $conn = openBD();

    $sentencia = $conn->prepare("UPDATE ciudades SET nombre = '$nombre' WHERE id_ciudad = $id");
    $sentencia->execute();

    $conn = closeBD();
}

?>