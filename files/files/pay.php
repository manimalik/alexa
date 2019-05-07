<?php

include('config.php');

$shop_id = $_REQUEST['shop_id'];
$montly_price = "10.0";
$sandbox = true; // or null;
$verify_url  = "https://briefify.coldsmoke.co/alex/files/verify_pay.php";
$charge_title = "Pro Account";
$trial_days = 5;

if(empty($shop_id))
die('{status:false}');

// Get Shop Details

$stmt = $conn->query("SELECT * FROM store_progress WHERE store_id = '".$shop_id."'");
$shop = $stmt->fetch();

if( !$shop ) 
die('{status:false}');

if( empty($shop['access_token']) || empty($shop['store_name'])) 
die('{status:false}');

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://".$shop['store_name']."/admin/api/2019-04/recurring_application_charges.json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"recurring_application_charge\": { \"name\": \"$charge_title\", \"price\": $montly_price, \"test\": $sandbox,\"return_url\":\"$verify_url\",\"trial_days\": $trial_days}}",
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
    echo $response;
    $charge = json_decode($response);
    $data = [
          		'charged_id'			=> $charge->recurring_application_charge->id,
          		'store_id'              => $shop_id
      	    ];

  	$sql = "UPDATE `store_progress` SET charged_id=:charged_id WHERE store_id=:store_id";
    $stmt= $conn->prepare($sql);
    $stmt->execute($data);
}
?>