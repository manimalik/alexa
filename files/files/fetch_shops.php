<?php
    include('config.php');
    $stmt = $conn->query("SELECT store_name FROM store_progress");
    $data[] = array(
            'label' => '--Select Status--',
            'value' =>  ''
        );
    while( $row = $stmt->fetch() ) {
        $comReplace = str_replace('.com','',$row['store_name']);
        $comReplace = str_replace('.myshopify','',$comReplace);
        
        $data[] = array(
                'label' =>  $comReplace,
                'value' =>  $row['store_name']
            );
    }  
    echo json_encode($data);
?>