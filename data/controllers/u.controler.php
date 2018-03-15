<?php
require_once("../init.php");
function select(){
    global $conn;
   @$uname=$_REQUEST["uname"];
   @$pwd=$_REQUEST["pwd"];
   if($uname){
   $sql="select uname from se_userlist where uname='$uname'";
   $result=mysqli_query($conn,$sql);
   $user=mysqli_fetch_all($result,1);
   if(count($user)!=0)
		echo false;
	 else
		echo true;
   }
}

function register(){
    global $conn;
	@$uname=$_REQUEST["uname"];
	@$pwd=$_REQUEST["pwd"];
   if($uname&&$pwd){
    $sql="insert into se_userlist(id,uname,pwd,em) values(null,'$uname','$pwd','$em')";
	mysqli_query($conn,$sql);
	}
}

function login(){
   global $conn;
   @$uname=$_REQUEST["uname"];
   @$pwd=$_REQUEST["pwd"];
   if($uname&&$pwd){
	   $sql="select * from se_userlist where uname='$uname' and binary pwd='$pwd'";
	   $result=mysqli_query($conn,$sql);
	   $user=mysqli_fetch_all($result,1);
	   if(count($user)!=0){
		   session_start();
		   $_SESSION["id"]=$user[0]["id"];
		   return true;
	   }else
		   return false;
   }
 }

function islogin(){
   global $conn;
   session_start();
   @$id=$_SESSION["id"];
   
   if($id){
		  
		  $sql="select uname from se_userlist where id=$id";
		  $result=mysqli_query($conn,$sql);
		  $user=mysqli_fetch_all($result,1);
		  return ["ok"=>1];
		}
	    else
			return ["ok"=>0];
 }

function logout(){
	 session_start();
     $_SESSION["id"]=null;
	
  }

?>