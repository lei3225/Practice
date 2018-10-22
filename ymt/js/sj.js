define(function(){
	class Sj{
		constructor(){}
		init(options){
			this.sp=$(options.sp);
			var url="http://localhost/gulp/ymt/js/index.json";
			var that=this;
			getAjax(url).then(function(res){
				res=JSON.parse(res);
				//console.log(res);
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`
						<li>
							<a href="#" target="_blank" class="hw">
								<img  src="${res[i].url}">
							</a>
                            <a href="#" target="_blank" >
							    <p>${res[i].name}</p>
                            </a>
							<p>${res[i].price}</p>
							<p><span ><img src=""></span><span>日本</span></p>
						</li>
					`;
				}
				that.sp[0].innerHTML=str;
			})
			
		}
	}
	return new Sj();
})
