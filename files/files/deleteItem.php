<?php 

include('config.php');

if(!isset($_REQUEST['record_id']) || empty($_REQUEST['record_id']))
die('{status:false}');

$record_id = $_REQUEST['record_id'];

$data = ['id' => $record_id];
$sql = "DELETE from store_briefing WHERE id=:id";
$stmt= $conn->prepare($sql);
$stmt->execute($data);

die("{deleted:true}");
                
                
                