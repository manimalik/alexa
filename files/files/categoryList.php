<?php 
include('config.php');
$stmt = $conn->query("SELECT * FROM info_categories");
while( $row = $stmt->fetch() ) {
    
    $data[] = array(
            'label' =>  $row['cat_name'],
            'value' =>  $row['cat_id']
        );
}  
echo json_encode($data);
?>