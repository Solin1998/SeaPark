(()=>{
if (location.search==""){
    ajax({
	    type:"get",
	    url:"data/allevens.php"	
	}).then(out=>{
		 console.log(out);
		 for(var i=0;i<out.length;i++){
			 var p=out[i];
			 console.log(p);
			 var html="";
		    html=`<div class="col-sm-6 col-md-4 col-xs-6 img_list">
                        <dd>
                            <img src="${p.img}" class="img-responsive" />
                            <button class="glyphicon glyphicon-link l_icon1" title="${p.cname}"></button>
                            <button class="glyphicon glyphicon-search l_icon2"></button>
                        </dd>
                        <p class="list1">${p.cname}</p>
                    </div>`;	
				document.getElementById("pic").innerHTML+=html;
						
		 }
		}) 
}else if(location.search){
		   ajax({
		        type:"get",
			    url:"data/fidevens.php",
				data:location.search.slice(1)
		   }).then(out=>{
					console.log(out);
		        for(var d=0;d<out.length;d++){
			 var p=out[d];
			 console.log(p);
			 var html="";
		    html=`<div class="col-sm-6 col-md-4 col-xs-6 img_list">
                        <dd>
                            <img src="${p.img}" class="img-responsive" />
                            <button class="glyphicon glyphicon-link l_icon1" title="${p.cname}"></button>
                            <button class="glyphicon glyphicon-search l_icon2"></button>
                        </dd>
                        <p class="list1">${p.cname}</p>
                    </div>`;	
				document.getElementById("pic").innerHTML+=html;
				}
				
                 
		   })
		}
		if(location.search.slice(-1)==1){
			$("#sea").css("background","#00c0ff")&& 
			$("#all").css("background","#fff")&&
			$("#all>span").css("color","#000");
	    }else if(location.search.slice(-1)==2){
			$("#water").css("background","#00c0ff")&&
		    $("#all").css("background","#fff")&&
			$("#all>span").css("color","#000");
		}
})()

