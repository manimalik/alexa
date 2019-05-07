<?php
include ('config.php');
try {
    $stmtProgress = $conn->query("SELECT * FROM store_progress WHERE store_name = '".$_GET['shop']."'");
    $progress = $stmtProgress->fetch(); 
    
    if( $progress ) {
        if( $progress['collect_info'] > 0 ) {
            $collect = 1;
            $text = 'Collecting Information';
        } else {
            $collect = 0;
        }
        if( $progress['submit_approval'] > 0 ) {
            $approval = 1;
            $text = 'Waiting for approval';
        } else {
            $approval = 0;
        }
        if( $progress['approved'] > 0 ) {
            $approved = 1;
            $text = 'Approved & Published';
        } else {
            $approved = 0;
        }
        $precentage = ($collect + $approval + $approved)/3 * 100;
        if( $precentage == 0 ) {
            $text = 'Process not started';
        }
    } else {
        $precentage = 0;
        $text = 'Process not started';
    }
    
    $isPaid = $progress['paid_store'];

    $stmt = $conn->query("SELECT * FROM flash_breifing WHERE shop = '".$_GET['shop']."'");
    $breifing = $stmt->fetch();
    if( $breifing ) {
        $data = array(
            'featured_discount' => $breifing['featured_discount'],
            'product_collection' => $breifing['product_collection'],
            'general_announcement' => $breifing['general_announcement'],
            'is_textbriefing' => $breifing['audio']=="" && $breifing['is_textbriefing']=="0" ? 1 : $breifing['is_textbriefing'],
            'audio' => $breifing['audio'],
            'id' => $progress['store_id'],
            'last_update' => ($breifing['last_updated'] == '0000-00-00 00:00:00') ? $breifing['last_updated'] : date("M d, Y H:i:s", strtotime($breifing['last_updated']) + (3600*4)),
            'precentage' => round($precentage),
            'paid_store' => boolval($isPaid),
            'textProgress'  =>  $text
        );

    } else {
        $data = array(
            'featured_discount' => "",
            'product_collection' => "",
            'general_announcement' => "",
            'audio' => "",
            'id' => "",
            'last_update' => '',
            'precentage' => $precentage,
            'paid_store' => 'false',
            'textProgress'  =>  ''
        );
    }

    echo json_encode($data);  
}
catch(PDOException $e)
{
    echo $e->getMessage();
}
?>