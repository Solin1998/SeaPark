//轮播
var list=document.getElementById("list");
var li1=document.getElementById("li1");
var li2=document.getElementById("li2");
  li1.onclick=()=>{
      list.style.left=-1100+"px";
  }
  li2.onclick=()=>{
      list.style.left=0;
  }
 function play(){
      var i=0;
	  
    function bo(){
	    if(i<3){
			list.style.left=-1100*i+"px";
           i++; 
	    }else if(i=3){
		    list.style.left=0+"px";
			i=0;
		}
	 }	 
	 return bo;
   
 }  
   var pp=play();
 
setInterval(pp,5000);

/*鼠标进入停止
var windo=document.getElementById('windo');

            function stop() {
                clearInterval(setInterval);
            }
            windo.onMouseover =stop;
            windo.onMouseout =pp;*/ 



var caseleft=document.getElementById("casea1");
var caseright=document.getElementById("casea2");
var  fiml=document.getElementById("fiml");
var  px=fiml.style.left;
   console.log(px);
    var i=1;
  caseleft.onclick=()=>{
      
          if(i<6){
			  fiml.style.left=-200*i+"px";
			  i++;	
	     }
  } 
  caseright.onclick=()=>{
    if(i>0){
			
			fiml.style.left=-200*i+200+"px";
			i--;
	     }	
  } 



(()=>{
	var glass=document.getElementById("glass");
	var glass2=document.getElementById("glass2");
    ajax({
	    type:"get",
		url:"data/routes/evenout.php"
	}).then(products=>{
		
		 
		   var p=products[0];
		 
	      var html=`<div class="glass" >
								<h5>${p.ename}</h5>
								<p>${p.exp}</p>
							</div>
							<a href="ban.html?eid=${p.eid}">
			        <img src="${p.img}" alt="" ></a>`; 
		  glass.innerHTML=html;
		     
	    for(var i=1;i<products.length-1;i++){
		         var html1="";
                 var j=products[i];
				
                 html1=`<ul class="ul1">
		                     <li>
					            <a href="ban.html?eid=${j.eid}">
					                 <img src="${j.img}" alt="">
					            </a>
							</li>
							 <li>
								<h5>${j.ename}</h5>
								<p>${j.exp}</p>
							 </li>	 
						 </ul>`;
	           glass2.innerHTML+=html1;
		} 
		
	   })
})();
