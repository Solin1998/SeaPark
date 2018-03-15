<?php
 require_once("../init.php");
 
function addToCart(){
      global $conn;
	  session_start();
	  @$id=$_SESSION["id"];
	  @$eid=$_REQUEST["eid"];
	  @$cot=$_REQUEST["cot"];
	  if($id){
		  $sql="select * from dogcar where id=$id 
		   and eid=$eid";
		   $result=mysqli_query($conn,$sql);
		   //echo (count(mysqli_fetch_all($result,1)));
		  if(count(mysqli_fetch_all($result,1))){
			  
           $sql="update dogcar set cot=cot+$cot where id=$id 
		   and eid=$eid";
		  }else{
			$sql="insert into dogcar(id,eid,cot) values($id,$eid,$cot)";}
			
	         mysqli_query($conn,$sql);
			 
		 }
}


function getCart(){
    global $conn;
	session_start();
        //@$id=$_REQUEST["id"];
	@$id=$_SESSION["id"];
	if($id){
	 $sql="select ename,price,cot,img,did from dogcar as dogcar left join evenlist as evenlist on dogcar.eid = evenlist.eid where dogcar.id =$id";
	 $result=mysqli_query($conn,$sql);
	 //echo $sql;
	 $out=mysqli_fetch_all($result,1);
	 echo json_encode($out);
	}else{
	  echo json_encode([]);
	}
}
//getCart();
function changecar(){
         global $conn;
		 @$did=$_REQUEST["did"];
		 @$cot=$_REQUEST["cot"];
		 $sql="";
		 if($cot==0)
			 $sql="delete from dogcar where did=$did";
		 else
			 $sql="update dogcar set cot=$cot where did=$did";
		mysqli_query($conn,$sql);
		
}

?>