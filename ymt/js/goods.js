define(function(){
	class Goods{
		constructor(){}
		init(options){
			this.search2=$(options.search2);
			this.xiala=$(options.xiala);
			this.label=$(options.label);
			var label=document.querySelectorAll('.label');
			var k=true;
			this.nr=$(options.nr);
//			console.log(this.nr);
			var that=this;
			
			
			
			this.xiala.on('click',function(){
				if(that.xiala[0].innerHTML=="更多"){
					that.search2.addClass('xiala');
					that.xiala.html("收起");
				}else{
					that.search2.removeClass('xiala');
					that.xiala.html("更多");
				}
				
			})
			for(let i=0;i<label.length;i++){
				label[i].onclick=function(){
					console.log(this)
					if(k){
						that.label.eq($(this).index()).children('em')[0].style.background="#c33";
						k=false;
					}else{
						that.label.eq($(this).index()).children('em')[0].style.background="#fff";
						k=true;
					}
					
				}
			}
			
			
			//请求数据
			var url="http://localhost/gulp/ymt/js/goods1.json";
			getAjax(url).then(function(res){
				res=JSON.parse(res);
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`
						<li>
							<a href="#">
								<img src="${res[i].url}">
							</a>
							<p><span>${res[i].price}</span></p>
							<p><a href="#">${res[i].name}</a></p>
							
						</li>
					`;
				}
//				console.log(str);
//				console.log(str);
				that.nr[0].innerHTML=str;
			})
		}
	}
	return new Goods();
})
