<?php
    include('config.php');
    
    $is_textbriefing = isset($_POST['is_textbriefing']) ? $_POST['is_textbriefing'] : '';
    


    if( $_FILES ) {
        $files = isset( $_FILES['file'] ) ? $_FILES['file'] : '';
        $shop = isset($_POST['shop']) ? $_POST['shop'] : '';
        
        
        if( $files ) {
            $target_dir = "/alex/uploads/";
            if( $files['name'] == 'blob' ) {
                $fileName = rand(10000 , 99999).'.mp3';
            } else {
                $extension = explode('.',$files['name']);
                $fileName = rand(10000 , 99999).'.'.$extension[1];
            }
            $target_file = $_SERVER['DOCUMENT_ROOT'].$target_dir.$fileName;
            if (move_uploaded_file($files["tmp_name"], $target_file)) {
                try {
                    $stmt = $conn->query("SELECT * FROM flash_breifing WHERE shop = '".$shop."'");
                    $breifing = $stmt->fetch();
                    if( $breifing ) {
                        $data = [
                            'audio' => $fileName,
                            'id' => $breifing['id'],
                        ];
                        $sql = "UPDATE flash_breifing SET audio=:audio, is_textbriefing='0' WHERE id=:id";
                        $stmt= $conn->prepare($sql);
                        $stmt->execute($data);
                    } else {
                        // prepare sql and bind parameters
                        $stmt = $conn->prepare("INSERT INTO flash_breifing (audio,shop,	is_textbriefing) 
                        VALUES (:audio,:shop, '0')");
                        $stmt->bindParam(':audio', $fileName);
                        $stmt->bindParam(':shop', $shop);
                        $stmt->execute();
                        
                        $stmtProgress = $conn->prepare("INSERT INTO store_progress (store_name,collect_info, submit_approval, approved,published) 
                        VALUES (:store_name,:collect_info, :submit_approval, :approved,:published)");
                        $stmtProgress->bindParam(':store_name', $shop);
                        $stmtProgress->bindParam(':collect_info', 0);
                        $stmtProgress->bindParam(':submit_approval', 0);
                        $stmtProgress->bindParam(':approved', 0);
                        $stmtProgress->bindParam(':published', 0);
                        $stmtProgress->execute();
                    }
                    
                    $data = array(
                        array(
                            'uid'   =>  'flash_skill_audio_1',
                            'updateDate' => date('Y-m-d\TH:i:s\Z'),
                            'titleText' => 'Briefly Audio File',
                            'mainText'  =>  'Briefly Audio File Description',
                            'streamUrl' =>  'https://briefify.coldsmoke.co/alex/uploads/'.$fileName,
                            'redirectionUrl'    =>  'https://briefify.coldsmoke.co/alex/',
                        )
                    );

                    $comReplace = str_replace('.com','',$shop);
                    $comReplace = str_replace('.myshopify','',$comReplace);
            
                    $fp = fopen($_SERVER['DOCUMENT_ROOT'].'/alex/data-'.$comReplace.'.json', 'w');
                    fwrite($fp, json_encode($data));
                    fclose($fp);
                    $is_textBriefing = "0";
                    $message =  "The file ". basename( $files["name"]). " has been uploaded.";
                }
                catch(PDOException $e)
                {
                    echo $e->getMessage();
                }
            } else {
                $message = "Sorry, there was an error uploading your file.";
                $is_textBriefing = "0";
            }
            $success = array(
                'message'   =>  $message,
                'is_textbriefing' => $is_textBriefing
            );
            echo json_encode($success);  
            die();
        }
    } else if( $_POST ) {
        $featured_discount = isset($_POST['featured_discount']) ? $_POST['featured_discount'] : '';
        $product_collection = isset($_POST['product_collection']) ? $_POST['product_collection'] : '';
        $general_announcement = isset($_POST['general_announcement']) ? $_POST['general_announcement'] : '';
        $is_textbriefing = isset($_POST['is_textbriefing']) ? $_POST['is_textbriefing'] : '';
        $shop = isset($_POST['shop']) ? $_POST['shop'] : '';
        
        $is_textbriefing = $is_textbriefing > 1 ? 0 : $is_textbriefing;
        
        try {
            $stmt = $conn->query("SELECT * FROM flash_breifing WHERE shop = '".$shop."'");
            $breifing = $stmt->fetch();
            
            if( $breifing ) {
                $data = [
                    'featured_discount' => $featured_discount,
                    'product_collection' => $product_collection,
                    'general_announcement' => $general_announcement,
                    'is_textbriefing' => $is_textbriefing,
                    'id' => $breifing['id'],
                ];
                $sql = "UPDATE flash_breifing SET featured_discount=:featured_discount, product_collection=:product_collection, general_announcement=:general_announcement, is_textbriefing=:is_textbriefing, audio='' WHERE id=:id";
                $stmt= $conn->prepare($sql);
                $stmt->execute($data);
                
                // Remove Audio File
                $fileName = $breifing['audio'];
                $target_dir = "/alex/uploads/";
                $target_file = $_SERVER['DOCUMENT_ROOT'].$target_dir.$fileName;
                unlink($target_file);
                
            } else {
                // prepare sql and bind parameters
                $stmt = $conn->prepare("INSERT INTO flash_breifing (featured_discount, product_collection, general_announcement,shop, is_textbriefing) 
                VALUES (:featured_discount, :product_collection, :general_announcement,:shop, :is_textbriefing)");
                $stmt->bindParam(':featured_discount', $featured_discount);
                $stmt->bindParam(':product_collection', $product_collection);
                $stmt->bindParam(':general_announcement', $general_announcement);
                $stmt->bindParam(':shop', $shop);
                $stmt->bindParam(':is_textbriefing', $is_textbriefing);
                
                $stmt->execute();
                
                $stmtProgress = $conn->prepare("INSERT INTO store_progress (store_name,collect_info, submit_approval, approved,published) 
                VALUES (:store_name,:collect_info, :submit_approval, :approved,:published)");
                $stmtProgress->bindParam(':store_name', $shop);
                $stmtProgress->bindParam(':collect_info', 0);
                $stmtProgress->bindParam(':submit_approval', 0);
                $stmtProgress->bindParam(':approved', 0);
                $stmtProgress->bindParam(':published', 0);
                $stmtProgress->execute();
            }
            
            $data = array(
                array(
                    'uid'   =>  'flash_skill_featured_discount_1',
                    'updateDate' => date('Y-m-d\TH:i:s\Z'),
                    'titleText' => 'Featured Discount',
                    'mainText'  =>  str_replace("&","and",$featured_discount),
                    'redirectionUrl'    =>  'https://briefify.coldsmoke.co/alex/'
                ),
                array(
                    'uid'   =>  'flash_skill_product_collection_1',
                    'updateDate' => date('Y-m-d\TH:i:s\Z'),
                    'titleText' => 'Product Collection',
                    'mainText'  =>  str_replace("&","and",$product_collection),
                    'redirectionUrl'    =>  'https://briefify.coldsmoke.co/alex/'
                ),
                array(
                    'uid'   =>  'flash_skill_general_announcement_1',
                    'updateDate' => date('Y-m-d\TH:i:s\Z'),
                    'titleText' => 'General Announcement',
                    'mainText'  =>  str_replace("&","and",$general_announcement),
                    'redirectionUrl'    =>  'https://briefify.coldsmoke.co/alex/'
                )
            );
        
            $comReplace = str_replace('.com','',$shop);
            $comReplace = str_replace('.myshopify','',$comReplace);
    
            $fp = fopen($_SERVER['DOCUMENT_ROOT'].'/alex/data-'.$comReplace.'.json', 'w');
            fwrite($fp, json_encode($data));
            fclose($fp);
            
            $success = array(
                'message'   =>  'Successfully saved',
                'is_textbriefing' => $is_textbriefing
            );
            echo json_encode($success);  
            die();
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }
?>