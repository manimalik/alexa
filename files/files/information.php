<?php 
include('config.php');

if( $_POST ) {
  	$public_name = (isset($_POST['public_name'])) ? $_POST['public_name'] : '';
  	$one_sent_desc = (isset($_POST['one_sent_desc'])) ? $_POST['one_sent_desc'] : '';
  	$detail_desc = (isset($_POST['detail_desc'])) ? $_POST['detail_desc'] : '';
  	$whats_new = (isset($_POST['whats_new'])) ? $_POST['whats_new'] : '';
  	$category = (isset($_POST['category'])) ? $_POST['category'] : '';
  	$keywords = (isset($_POST['keywords'])) ? $_POST['keywords'] : '';
  	$privacy = (isset($_POST['privacy'])) ? $_POST['privacy'] : '';
  	$terms = (isset($_POST['terms'])) ? $_POST['terms'] : '';
  	$skill_purchase_money = (isset($_POST['skill_purchase_money'])) ? $_POST['skill_purchase_money'] : '';
  	$personal_info = (isset($_POST['personal_info'])) ? $_POST['personal_info'] : '';
  	$target_children = (isset($_POST['target_children'])) ? $_POST['target_children'] : '';
  	$advertising = (isset($_POST['advertising'])) ? $_POST['advertising'] : '';
  	$testing_instructions = (isset($_POST['testing_instructions'])) ? $_POST['testing_instructions'] : '';
  	$access_skill = (isset($_POST['access_skill'])) ? $_POST['access_skill'] : '';
  	$shop = (isset($_POST['shop'])) ? $_POST['shop'] : '';
  	if( $_FILES ) {
  		$small_icon = (isset($_FILES['small_icon'])) ? $_FILES['small_icon'] : '';
  		$large_icon = (isset($_FILES['large_icon'])) ? $_FILES['large_icon'] : '';
  		$target_dir = "/alex/store_icons/".$shop;
  		if( !is_dir($target_dir) ) {
			mkdir($target_dir);
		}
		
		/* Upload Small Icon */
		$extension = explode('.',$small_icon['name']);
        $SmallfileName = rand(10000 , 99999).'-108.'.$extension[1];
		$target_small_icon = $_SERVER['DOCUMENT_ROOT'].$target_dir.$SmallfileName;
		move_uploaded_file($small_icon["tmp_name"], $target_small_icon); 

		/* Upload Large Icon */
		$extension = explode('.',$large_icon['name']);
        $LargefileName = rand(10000 , 99999).'-512.'.$extension[1];
		$target_large_icon = $_SERVER['DOCUMENT_ROOT'].$target_dir.$LargefileName;
		move_uploaded_file($large_icon["tmp_name"], $target_large_icon); 
  	}

  	try 
  	{
  		$stmt = $conn->query("SELECT * FROM `collect-info` WHERE shop = '".$shop."'");
        $info = $stmt->fetch();
  		if( $info ) {
  			$data = [
  				'public_name'			=>	$public_name,
  				'one_sent_desc'			=>	$one_sent_desc,
  				'detail_desc'			=>	$detail_desc,
  				'whats_new'				=>	$whats_new,
  				'category'				=>	$category,
  				'keywords'				=>	$keywords,
  				'privacy'				=>	$privacy,
  				'terms'					=>	$terms,
  				'skill_purchase_money'	=>	$skill_purchase_money,
  				'personal_info'			=>	$personal_info,
  				'target_children'		=>	$target_children,
  				'advertising'			=>	$advertising,
  				'testing_instructions'	=>	$testing_instructions,
  				'access_skill'			=>	$access_skill,
  				'small_icon'			=>	$small_icon,
  				'large_icon'			=>	$large_icon,
  				'id'					=>	$info['info_id']
  			];

  			$sql = "UPDATE `collect-info` SET public_name=:public_name,one_sent_desc=:one_sent_desc,detail_desc=:detail_desc,whats_new=:whats_new,category=:category,keywords=:keywords,privacy=:privacy,terms=:terms,skill_purchase_money=:skill_purchase_money,personal_info=:personal_info,target_children=:target_children,advertising=:advertising,testing_instructions=:testing_instructions,access_skill=:access_skill,small_icon=:small_icon,large_icon=:large_icon WHERE info_id=:id";
            $stmt= $conn->prepare($sql);
            $stmt->execute($data);
  		} else {
  			// prepare sql and bind parameters
            $stmt = $conn->prepare("INSERT INTO `collect-info` (public_name,one_sent_desc,detail_desc,whats_new,category,keywords,privacy,terms,skill_purchase_money,personal_info,target_children,advertising,testing_instructions,access_skill,small_icon,large_icon,shop) 
            VALUES (:public_name,:one_sent_desc,:detail_desc,:whats_new,:category,:keywords,:privacy,:terms,:skill_purchase_money,:personal_info,:target_children,:advertising,:testing_instructions,:access_skill,:small_icon,:large_icon,:shop)");
            $stmt->bindParam(':public_name', $public_name);
            $stmt->bindParam(':one_sent_desc', $one_sent_desc);
            $stmt->bindParam(':detail_desc', $detail_desc);
            $stmt->bindParam(':whats_new', $whats_new);
            $stmt->bindParam(':category', $category);
            $stmt->bindParam(':keywords', $keywords);
            $stmt->bindParam(':privacy', $privacy);
            $stmt->bindParam(':terms', $terms);
            $stmt->bindParam(':skill_purchase_money', $skill_purchase_money);
            $stmt->bindParam(':personal_info', $personal_info);
            $stmt->bindParam(':target_children', $target_children);
            $stmt->bindParam(':advertising', $advertising);
            $stmt->bindParam(':testing_instructions', $testing_instructions);
            $stmt->bindParam(':access_skill', $access_skill);
            $stmt->bindParam(':small_icon', $small_icon);
            $stmt->bindParam(':large_icon', $large_icon);
            $stmt->bindParam(':shop', $shop);
            $stmt->execute();
            
            
            $collectInfo = "2";
            $submitApproval = "0";
            $approved = "0";
            
            $data = [
  				'collect_info'		=>	$collectInfo,
  				'submit_approval'	=>	$submitApproval,
  				"store_name"        =>  $shop,
  				'approved'			=>	$approved
  			];
  			
  			$sql = "UPDATE `store_progress` set collect_info=:collect_info, submit_approval=:submit_approval, approved=:approved where store_name=:store_name";
            $stmt= $conn->prepare($sql);
            $stmt->execute($data);
            
            // $stmtProgress = $conn->prepare("INSERT INTO `store_progress` (store_name,collect_info,submit_approval,approved,created) 
            // VALUES (:store_name,:collect_info,:submit_approval,:approved,NOW())");
            // $stmtProgress->bindParam(':store_name', $shop);
            // $stmtProgress->bindParam(':collect_info', $collectInfo);
            // $stmtProgress->bindParam(':submit_approval', $submitApproval);
            // $stmtProgress->bindParam(':approved', $approved);
            // $stmtProgress->execute();
            
            $stmtProgress = $conn->prepare("INSERT INTO `flash_breifing` (shop,created) 
            VALUES (:store_name,NOW())");
            $stmtProgress->bindParam(':store_name', $shop);
            $stmtProgress->execute();
            
             $data = array(
                'status'    =>  1,
                'message'   =>  'Successfuly Added'
            );
  		}
  	}
  	catch(PDOException $e)
    {
        echo $e->getMessage();
    }
} else {
    $data = array(
        'status'    =>  0,
        'message'   =>  'Oops something went wrong'
    );
}
echo json_encode($data);
?>