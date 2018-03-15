(()=>{

  ajax({
    type:"get",
	url:"banner.html",
	dataType:"html"
  })
	.then(html=>{
   var nav=document.getElementById("nav");
  nav.innerHTML=html;
  })


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

})();