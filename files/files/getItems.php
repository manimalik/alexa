<?php
    include('config.php');
    
    if(!isset($_REQUEST['shop_id']) || empty($_REQUEST['shop_id']))
    die('{status:false}');
    
    
    $stmt = $conn->query("SELECT * FROM store_briefing where store_id=".$_REQUEST['shop_id'], PDO::FETCH_ASSOC);
    
    while( $row = $stmt->fetch() ) {
        $data[] = $row;
    }  
    echo json_encode($data);
?>