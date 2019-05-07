<?php 
include('config.php');
try {
    $storeFeed = $conn->query("SELECT *,now() 
        FROM `store_briefing`,`store_progress` 
        WHERE pub_date <= now() and status='0' and `store_briefing`.`store_id`=`store_progress`.`store_id` 
        GROUP BY `store_briefing`.`store_id` 
        ORDER BY pub_date DESC");

    while( $rows = $storeFeed->fetch() ) {

        $shop = $rows['store_name'];
        $featured_discount = $rows['text'];
        $data = array(
             array(
                'uid'   =>  'flash_skill_featured_discount_1',
                'updateDate' => date('Y-m-d\TH:i:s\Z'),
                'titleText' => 'Featured Discount',
                'mainText'  =>  str_replace("&","and",$featured_discount),
                'redirectionUrl'    =>  'https://briefify.coldsmoke.co/alex/'
            ),
        );

        $comReplace = str_replace('.com','',$shop);
        $comReplace = str_replace('.myshopify','',$comReplace);

        $fp = fopen($_SERVER['DOCUMENT_ROOT'].'/alex/test-data-'.$comReplace.'.json', 'w');
        //$fp = fopen($_SERVER['DOCUMENT_ROOT'].'/alex/'.$comReplace.'.json', 'w');
        fwrite($fp, json_encode($data));
        fclose($fp);

        $parameters = [
            'id'   => $rows['id']
        ];

        $updateStoreBreifing = "UPDATE store_briefing SET status='1' WHERE id=:id";
        $prepareUpdate = $conn->prepare($updateStoreBreifing);
        $prepareUpdate->execute($parameters);
    }
}
catch(PDOException $e)
{
    echo $e->getMessage();
}