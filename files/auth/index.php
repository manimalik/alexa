<?php 
session_start();
include('../files/config.php');

$store = $_GET['shop'];
$apiKey = "cb8d753742b9e2506a2620e4910328bd";
$apiSecret = "9053ed2b2b6ae6d2a4297658eed0545d";

if( $_REQUEST['locale'] ) {
    header('Location: https://briefify.coldsmoke.co/alex/?shop='.$_REQUEST['shop']);
    exit;
}

// Step 02
if(isset($_REQUEST['code']) && !empty($_REQUEST['code']))
{

    $post_fields = "client_id=".$apiKey."&client_secret=".$apiSecret."&code=".$_REQUEST['code'];
    $res = cUrlGetData('https://'.$store.'/admin/oauth/access_token', $post_fields);
    $output = json_decode($res);
        //var_dump($output);
        //die($output->access_token);
    	$stmt = $conn->query("SELECT * FROM `store_progress` WHERE store_name = '".$store."'");
        $info = $stmt->fetch();
  		if( $info ) {
  		    //echo 'Update';
  		    // Update access token
  		    $data = [
  				"access_token"	    =>	$output->access_token,
  				"store_name"        =>  $store
  			];
  		    $sql = "UPDATE `store_progress` set access_token=:access_token where store_name=:store_name";
            $stmt= $conn->prepare($sql);
            $stmt->execute($data);
  		}else{
  		    // Add access token
  		    //echo 'Add';
  		    $stmtProgress = $conn->prepare("INSERT INTO `store_progress` (store_name,access_token,created) VALUES (:store_name,:access_token,NOW())");
            $stmtProgress->bindParam(':store_name', $store);
            $stmtProgress->bindParam(':access_token', $output->access_token);
            $stmtProgress->execute();
  		}
    
    header("location: https://".$store."/admin/apps");
    exit();
}

// Step 01
if(!isset($_REQUEST['code']))
{

    header("location: https://".$store."/admin/oauth/request_grant?client_id=".$apiKey."&redirect_uri=https://briefify.coldsmoke.co/alex/auth/&scope=read_products%2Cread_orders%2Cwrite_script_tags%2Cwrite_customers%2Cwrite_themes&state=b2e50f601f3f299dc419592f5f1a655df45630e8fbdfc30c7ef8eeb888048d42");
    exit();
}


// CURL Post Function
function cUrlGetData($url, $post_fields = null, $headers = null) {
    $ch = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);
    if ($post_fields && !empty($post_fields)) {
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
    }
    if ($headers && !empty($headers)) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);
    return $data;
}

?>