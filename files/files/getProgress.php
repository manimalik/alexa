<?php
    include('config.php');
    $_POST = json_decode(file_get_contents('php://input'), true);
    if($_POST) {
        $store = isset($_POST['store']) ? $_POST['store'] : 'flash-sale-theme.myshopify.com';
        $stmt = $conn->query("SELECT * FROM store_progress WHERE store_name = '".$store."'");
        $progress = $stmt->fetch();
        if($progress) {
           if( $progress['collect_info'] == '2' ) {
               $data = array(
                    'collect_information' => 1 ,
                    'paid_store' => $progress['paid_store']
               );
           } elseif( $progress['submit_approval'] == '2' ) {
               $data = array(
                    'submit_approval' => 1 ,
                    'paid_store' => $progress['paid_store']
               );
           } elseif( $progress['approved'] == '2' ) {
               $data = array(
                    'approved' => 1 ,
                    'paid_store' => $progress['paid_store']
               );
           } else {
               $data = array(
                    'status'    => 0,
                    'paid_store' => $progress['paid_store']
                );
           }
        }else {
           $data = array(
                'status'    => 0,
                'paid_store' => $progress['paid_store']
            );
        }
        echo json_encode($data);
    }
?>