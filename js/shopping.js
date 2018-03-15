(()=>{
    function load(){
	   var login=document.getElementById("cart3");
	   var out=document.getElementById("cart3e");
	   ajax({
			type:"get",
			url:"data/routes/islogin.php"
		}).then(data=>{
			if(data.ok==1){
				login.style.display="none";
				out.style.display="block";
				}else{
				login.style.display="block";
				out.style.display="none";
			}
		});
	}
load();
 function getcar(){
    ajax({
	      type:"get",
		  url:"data/routes/getcar.php"
	}).then(data=>{ 
	       for(var i=0;i<data.length;i++){
	        var  p=data[i];
			var z=p.price*p.cot;
		 var html=`
			        <div class="cart6">
			 <button id="x">X</button>
			  <img src="${p.img}">
				<span>
				  <p><a href="script:;">${p.ename}
		 </a>&nbsp;&nbsp;日间单人门票 
		 <br><br>数量:
		 <button>-</button><b>${p.cot}</b><button>+</button>件</p>
				  <p>单价: <b>${p.price}</b>元</p>
				</span>
				<span><p>第<a>${p.did}</a>单的商品已成功加入购物车！<br>此单:<a class="echoy">¥${z}</a></p></span>
			     </div>`;
		       document.getElementById("cart5")
				     .innerHTML+=html;
			  var sum=document.getElementById("money");
     sum.innerHTML=parseInt(sum.innerHTML)+z;
					
		   } 
		 
		 
	})
}
getcar();
var btn=document.getElementById("u2");
     btn.onclick=()=>{
		
	     ajax({
		    type:"get",
			url:"data/routes/loginout.php",
			dataType:"text"
		 }).then(dataType=>{
		      location.reload();
		   })
	 }		  
	

 
   var cart5=document.getElementById("cart5");

  

   var car6s=document.getElementsByClassName("cart6");
   
   cart5.onclick=e=>{	
  
     var did=e.target.parentNode.parentNode
			     .nextSibling.nextSibling
			     .firstChild.firstChild
			     .nextSibling.innerHTML;
	 if(e.target.innerHTML=="+"){
	    var n=e.target.previousSibling.innerHTML;
           n++;
		 e.target.previousSibling.innerHTML=n;
            location.reload();
             
      }else if(e.target.innerHTML=="-"){
		  var n=e.target.nextSibling.innerHTML;
			   
			n--;
			location.reload();
	        if(n>0){
				
			e.target.nextSibling.innerHTML=n;
			
			}else if(n==0){
				
            e.target.parentNode.parentNode
				    .parentNode.innerHTML="";
			       location.reload();
			}
		}
		  ajax({
		         type:"get",
			     url:"data/routes/changecar.php",
				 data:"did="+did+"&cot="+n
		   })
 }        
     //var sum=document.getElementById("money").innerHTML;
                 //  console.log(sum);
			//var  doull=cart5.querySelector(".cart6");//.lastChild
					//console.log(doull);  //.firstChild.lastChild;
		//console.log($("#cart5").find(".cart6"));
          //sum+= document.querySelector("#cart5 .echoy").innerHTML; 
 /*cart5.onclick=e=>{
       if(e.target.innerHTML=="X"){
        var did2=e.target.nextSibling
			     .nextSibling.nextSibling.nextSibling
			     .firstChild.nextSibling;
			console.log(did2);     

      }
	 }*/
})();