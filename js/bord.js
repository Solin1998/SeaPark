(()=>{
  ajax({
	   type:"get",
	   url:"bord.html",
	   dataType:"html"
  })
    .then(html=>{
      var header=document.getElementById("brim");
	  header.innerHTML=html;
  })
})();