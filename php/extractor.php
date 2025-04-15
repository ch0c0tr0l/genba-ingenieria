<?php
// This script extracts the contents of a zip file and saves it to a specified directory$
// It also creates a new directory if it doesn't exist and lists the contents of the current directory
    
    $carpeta = $_GET['carpeta'];
    $dir = scandir('../img/'.$carpeta.'/');
    $arrayimage =  array();
    $ruta = '../img/'.$carpeta.'/';
    foreach ($dir as $key => $value) {
        if ($value == '.' || $value == '..') {
            continue;
        }
        $origen = pathinfo($ruta, PATHINFO_EXTENSION);
        $data = file_get_contents($ruta.$value);
        array_push($arrayimage, 'data:image'.$origen.';base64,'.base64_encode($data));
    }
    
    echo json_encode($arrayimage);

?>