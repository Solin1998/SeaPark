var btn=document.getElementById("btn");
var dad=document.getElementById("roll5");
var u=dad.getElementsByClassName("case1")[0];
var p=dad.getElementsByClassName("case2")[0];
var pr=dad.getElementsByClassName("case3")[0];
  btn.onclick=e=>{
	 
   if(u.value=="")
    alert("用户名不能为空");
   if(p.value=="")
    alert("密码不能为空");
   if(!p.value==pr.value)
    alert("两次密码必须一样");
   if(u.value!=""&&p.value!=""&&p.value==pr.value) 
	{
	   ajax({
	       type:"post",
		   url:"data/routes/checkName.php",
           data:"uname="+u.value.trim(),
		   dataType:"text"
	}).then(text=>{
		 console.log(text);
	     if(text=='false')
			   alert("用户名已经存在");
		 else{
		  ajax({
		   type:"post",
		   url:"data/routes/register.php",
		   data:"uname="+u.value.trim()+"&pwd="+p.value.trim(),
		   dataType:"text" 
		 }).then(()=>{
              alert("注册成功");
		      location="login.html";
		   })
		 }
	})
   
  }
 }