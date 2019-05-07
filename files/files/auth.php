<?php 
    $_POST = json_decode(file_get_contents('php://input'), true);
    
    if( $_POST ) {
        $username = (isset($_POST['username'])) ? $_POST['username'] : '';
        $password = (isset($_POST['password'])) ? $_POST['password'] : '';
        
        if( $username == "admin" && $password == "besthivepk@123" ) {
            $data = array(
                'status'    =>  1,
                'message'   =>  'Successfully login'
            );
        } else {
            $data = array(
                'status'    =>  0,
                'message'   =>  'Login Failed'
            );
        }
    } else {
        $data = array(
            'status'    =>  0,
            'message'   =>  'Login Failed'
        );
    }
    echo json_encode($data);
?>