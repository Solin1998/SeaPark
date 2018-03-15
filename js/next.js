(()=>{
  ajax({
    type:"get",
	url:"next.html",
	dataType:"html"
  })
	.then(html=>{
   var footer=document.getElementById("footer");
  footer.innerHTML=html;
  })
})();