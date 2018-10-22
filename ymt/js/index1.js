define(function(){
	class Index1{
		constructor(){}
		init(options){
			this.product=$(options.product);
			
			var url="http://localhost/gulp/ymt/js/index1.json";
			var that=this;
			getAjax(url).then(function(res){
				res=JSON.parse(res);
				//console.log(res);
				var str="";
				for(var i=0;i<res.length;i++){
					str+=`
						<li data-id="${res[i].goodid}">
						    <a href="shop.html" target="_blank">
						        <img  src="${res[i].url}">
						    </a>
						    <a href="#" target="_blank" ><p>${res[i].name}</p></a>
						    <div class="go">加入</div>
						    <p >${res[i].price}</p>
   						</li>
					`;
				}
//				console.log(str);
				that.product[0].innerHTML=str;
//				console.log(that.product.innerHTML);
			})
			this.go=$(options.go);
			this.product.on('click','div',function(){
				var index=$(this).parent().attr("data-id");
				that.setCookie(index);
			})
		}
		setCookie(index){
			if($.cookie("goods")){
				//之前有商品
				this.goods = JSON.parse($.cookie("goods"));
					var onOff = true;
					for(var i=0;i<this.goods.length;i++){
						if(this.goods[i].id == index){
//							2.添加已有商品
							this.goods[i].num++
							onOff = false;
						}
					}
					if(onOff){
						this.goods.push({
							id:index,
							num:1
						})
					}
					$.cookie("goods",JSON.stringify(this.goods))
					console.log($.cookie("goods"))
				
			}else{
				//之前没有商品
				this.goods = [{id:index,num:1}];
				$.cookie("goods",JSON.stringify(this.goods));
			}
		}
		
	}
	return new Index1();
})
