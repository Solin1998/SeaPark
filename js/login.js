var btn=document.getElementById("btn");
var box=document.getElementById("enter5");
 var u=box.getElementsByClassName("case1")[0];
var p=box.getElementsByClassName("case2")[0];

 btn.onclick=()=>{
      ajax({
	      type:"post",
	      url:"data/routes/login.php",
		  data:"uname="+u.value.trim()+"&pwd="+p.value.trim(),
	      dataType:"text"
	  }).then(text=>{
		  
	     if(text=="false"){
		alert("用户名或密码错误!");
		 }else{
		 if(location.search!==""){ 
	      location=decodeURIComponent(location.search.slice(6));
	  }else{
		  location="shopping.html";
	     }
	  }
	 });
	 
 };