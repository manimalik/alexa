<?php

include('config.php');

$UTCtoET = 3600*4;

if( $_POST ) {
        
        $hasAudio = false;
    
        if(isset( $_FILES['file'] ))
        {
            $files = isset( $_FILES['file'] ) ? $_FILES['file'] : '';
            
            $target_dir = "/alex/uploads/";
            if( $files['name'] == 'blob' ) {
                $fileName = rand(10000 , 99999).'_audio.mp3';
            } else {
                $extension = explode('.',$files['name']);
                $fileName = rand(10000 , 99999).'_audio.'.$extension[1];
            }
            $target_file = $_SERVER['DOCUMENT_ROOT'].$target_dir.$fileName;
            
            if (move_uploaded_file($files["tmp_name"], $target_file)) {
                $hasAudio = true;
            }
        }
    
        $text = isset($_POST['feed_text']) ? $_POST['feed_text'] : '';
        $title = isset($_POST['feed_title']) ? $_POST['feed_title'] : '';
        
        //date("M d, Y H:i:s", strtotime($breifing['last_updated']) + (3600*4))
        
        $audio = $hasAudio ? $fileName : '';
        $pub_date = isset($_POST['pub_date']) ? $_POST['pub_date'] : '';
        $store_id = isset($_POST['store_id']) ? $_POST['store_id'] : '';
        $editMode = isset($_POST['record_id']) ? true : false;
        $record_id = isset($_POST['record_id']) ? $_POST['record_id'] : 0;
        
        $time = strtotime($pub_date.' EDT') - 3600;
        $time = $time + date("Z");
        $dateInLocal = date('Y-m-d H:i:s',$time );
        
        $localTime = date('Y-m-d H:i:s',strtotime($pub_date));

        try {
            $stmt = $conn->query("SELECT * FROM store_briefing WHERE id = '".$record_id."'");
            $breifing = $stmt->fetch();
            
            $data = [
                    'hasAudio' => $hasAudio,
                    'text' => $text,
                    'title' => $title,
                    'audio' => $audio,
                    'pub_date' => $dateInLocal,
                    'local_time' => $localTime,
                    'id' => $record_id,
                ];
            
            if( $breifing ) {
                $data = [
                    'text' => $text,
                    'title' => $title,
                    'audio' => $audio,
                    'pub_date' => $dateInLocal,
                    'local_time' => $localTime,
                    'id' => $record_id,
                ];
                $sql = "UPDATE store_briefing SET pub_date=:pub_date,local_time=:local_time, title=:title, text=:text, audio=:audio, status=0 WHERE id=:id";
                $stmt= $conn->prepare($sql);
                $stmt->execute($data);
                
                $response = array("message"=>"Successfully Updated", "status"=>1);
                
                // Remove Audio File
                // $fileName = $breifing['audio'];
                // $target_dir = "/alex/uploads/";
                // $target_file = $_SERVER['DOCUMENT_ROOT'].$target_dir.$fileName;
                // unlink($target_file);
                
            } else {
                // prepare sql and bind parameters
                $stmt = $conn->prepare("INSERT INTO store_briefing (store_id, title, pub_date,local_time, text, audio) 
                VALUES (:store_id, :title, :pub_date,:local_time, :text, :audio)");
                $stmt->bindParam(':title', $title);
                $stmt->bindParam(':store_id', $store_id);
                $stmt->bindParam(':pub_date', $dateInLocal);
                $stmt->bindParam(':local_time', $localTime);
                $stmt->bindParam(':text', $text);
                $stmt->bindParam(':audio', $audio);
                
                $stmt->execute();
                $response = array("message"=>"Successfully Added", "status"=>1);
            }
            
            echo json_encode($data);
           
            
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
}