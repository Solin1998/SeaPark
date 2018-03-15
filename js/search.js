
(()=>{
    var png1=document.getElementById("png1");
	 ajax({
	     type:"get",
		 url:"data/routes/evenout.php",
		 }).then(products=>{
			 console.log(products);
		     for(var i=0;i<products.length;i++){
			   var    p=products[i]
			   var   html=`<a href="ban.html?eid=${p.eid}">
				 <img class="btnbg trans-rotate" src="${p.img}" title="海豹表演" >
				<span><h3>${p.ename}</h3>
				<p>彩绝伦、视觉享受 </p>`;
		        png1.innerHTML+=html;
			 }
		   }) 
			
	
})();
