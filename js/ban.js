


/*加减号带数值变化*/
  var $bly=$(".gouwu");
  var $ku=$(".form-group>.num").html();
  var   $n=parseInt($ku.slice(2,6));
		
     $bly.click(e=>{
	  if(e.target.nodeName=="BUTTON"&&
		   e.target.innerHTML=="+"){
        var $i=$(".gouwu>input").val();
		   $i++;console.log($i);
		   $(".gouwu>input").val($i);
		   $(".form-group>.num").html("库存"+ $n-- +"件");
		   
		 } 
	   if(e.target.nodeName=="BUTTON"&&
		   e.target.innerHTML=="-"){
	     $i=$(".gouwu>input").val();
		 if($i>1)
		  $i--;
		 $(".gouwu>input").val($i);
          if($n<1097)
		 $(".form-group>.num").html("库存"+ $n++ +"件");
		 } 
		
	 });



(()=>{
		        
     ajax({
	      type:"get",
          url:"data/routes/getevenbyid.php",
		  data:location.search.slice(1)
	 }).then(out=>{
		  var p=out[0];
		 
	       var al1=`<img src="${p.img}" alt="" />`;
		   document.getElementsByClassName("col1")[0]
			       .innerHTML=al1;
		   var al2=`${p.ename}`;
			
		   document.getElementById("h2")
				   .innerHTML=al2;
		   var al3=`${p.exp}`;
		   document.getElementsByClassName("description")[0]
			       .innerHTML=al3;
		   var al4=`<span class="price">${p.price}元</span>`;
           document.getElementById("pre")
			       .innerHTML=al4;
		   var num=document.getElementById("number").value;
		 
		   var al5=`<a href="script:;">
						<span class="shop">加入购物车</span>
					</a>
		
					<a >
						  <span class="enter">加入收藏</span>
					</a>`;
		   document.getElementById("like")
			       .innerHTML=al5;

		})

     ajax({
	    type:"get",
		url:"data/routes/evenout.php"
	  }).then(products=>{ 
	          for(var i=0;i<6;i++){
			        var p=products[i];
				var html=`
				   <a href="ban.html?eid=${p.eid}"> <img src="${p.img}"></a><br>
				   <a href="" class="hai">${p.ename}</a>
				   <p>${p.price}元</p>`;
				   document.getElementsByClassName("pic")[0]
					       .innerHTML+=html;
			  }
	     })    

    
	
 })();
 var like= document.getElementById("like");
     console.log(1223);
		like.onclick=e=>{
	          if(e.target.className=="shop"&& e.target.nodeName=="SPAN"){
			     ajax({
				       type:"get",
					   url:"data/routes/islogin.php"	   
				 }).then(data=>{
					   if(data.ok==1){
						   var $n=$("#number").val()
						   ajax({
						        type:"get",
								url:"data/routes/adddogcar.php",
								data:location.search.slice(1)+"&cot="+$n,
							    dataType:"text"
						   }).then(()=>{location="shopping.html"+location.search.slice();})
                        }else{location="login.html";}
					 })
			  } 
 }
 var door= document.getElementById("door");
     
		door.onclick=e=>{
	          
			     ajax({
				       type:"get",
					   url:"data/routes/islogin.php"	   
				 }).then(data=>{
						   console.log(data);
					   if(data.ok==1){
						 location="shopping.html";
                        }else{location="login.html";}
					 })
			   
        }