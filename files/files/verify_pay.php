<?php
include('config.php');

$charge_id = $_REQUEST['charge_id'];
//$store_id = $_POST['shop_id'];

if(empty($charge_id))
die('{status:false}');


$stmt = $conn->query("SELECT * FROM store_progress WHERE charged_id = '".$charge_id."'");
$shop = $stmt->fetch();

if( !$shop ) 
die('{status:false}');

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://".$shop['store_name']."/admin/api/2019-04/recurring_application_charges/$charge_id.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/json",
    "x-shopify-access-token: ".$shop['access_token']
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
    
    //var_dump($response);
    $response = json_decode($response);
    
    if($response->errors)
    die('{status:false}');

  if($response->recurring_application_charge->status == "accepted")
  {
            $data = [
          		'paid_store'			=> 1,
          		'charged_id'			=> $charge_id,
          		'store_id'              => $shop['store_id']
      	    ];

  			$sql = "UPDATE `store_progress` SET paid_store=:paid_store,charged_id=:charged_id WHERE store_id=:store_id";
            $stmt= $conn->prepare($sql);
            $stmt->execute($data);
            
            $data = array(
                'status'    => $response->recurring_application_charge->status,
                'charge_id'    => $charge_id,
                'paid_store' => 1
            );
            
            //echo json_encode($data);
  }else{
       $data = array(
                'status'    => $response->recurring_application_charge->status,
                'charge_id'    => $charge_id,
                'paid_store' => 0
            );
            //echo json_encode($data);
      
  }
  
}
//echo $sql;
//echo $data;
header("location: https://".$shop['store_name']."/admin/apps/amazon-skill-app");