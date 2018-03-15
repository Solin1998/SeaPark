<?php
require_once("../init.php");
function get_index_products(){
    global $conn;
	$sql="select * from  evenlist";
	$result=mysqli_query($conn,$sql);
	$products=mysqli_fetch_all($result,1);
	echo json_encode($products);
}

function getEvensById(){
      global $conn;
	  @$eid=$_REQUEST["eid"];	
	 if($eid){
	 $sql="select exp,ename,img,price from evenlist where eid=$eid ";
	 $result=mysqli_query($conn,$sql);
	 $out=mysqli_fetch_all($result,1);
	 }
	 echo json_encode($out);
}
?>