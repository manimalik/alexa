<?php
$hostname='localhost';
$username='briefifycoldsmok_brennans';
$password='&te*;du5CWIN';

$conn = new PDO("mysql:host=$hostname;dbname=briefifycoldsmok_brennans_breifing",$username,$password);
        
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>