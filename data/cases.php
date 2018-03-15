<?php
 header("Content-Type:application/json");
 require_once("init.php");
function getevens(){
    global $conn;

	$sql="select * from cases";
	$result=mysqli_query($conn,$sql);
	 $out=mysqli_fetch_all($result,1);
	 echo json_encode($out);
}
function getevensbyfid(){
     global $conn;
	 @$fid=$_REQUEST["fid"];
	 
	 if($fid){
	 $sql="select * from cases where fid=$fid";
	 $result=mysqli_query($conn,$sql);
	 $out=mysqli_fetch_all($result,1);
	 }
	 echo json_encode($out);
} 

 ?>
