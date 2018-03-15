(()=>{
  ajax({
	   type:"get",
	   url:"footer.html",
	   dataType:"html"
  })
    .then(html=>{
      var header=document.getElementById("foot");
	  header.innerHTML=html;
  })
})();