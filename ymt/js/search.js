define(function(){
	class Search{
		constructor(){}
		init(options){
			this.search=$(options.search);
			this.btn=$(options.btn);
			this.ts=$(options.ts);
			this.ts2=$(options.ts2);
			this.url=options.url;
			var that=this;
			this.search.on('focus',function(){
				that.ts[0].style.display="block";
				
			})
			this.search.on('keyup',function(){
				jsonp(that.url,{
					cb:"ksajdhaid",
					wd:this.value,
				},"cb").then(function(res){
					var data = res.s;
					var str = "";
					for(var i=0;i<data.length;i++){
						str += `<li>${data[i]}</li>`
					} 
					if(that.search[0].value.length!=0){
						that.ts[0].style.display="none";
						that.ts2[0].style.display="block";
						that.ts2.html(str);
						/*window.onkeydown=function(eve){
							var e=eve||window.event;
							var keyC=e.keyCode||e.which;
							if(e.keyC==40){
								
							}
						}*/
					}else{
						that.ts2[0].style.display="none";
						that.ts[0].style.display="block";
					}
					

					
				//console.log(that.ts.html());
				})
			})
			this.search.on('blur',function(){
				that.ts[0].style.display="none";
				that.ts2[0].style.display="none";
				
			})
			
		}

	}
	return new Search();
})