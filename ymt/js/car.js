define(function(){
	class Car{
		constructor(){}
		load(options){
			this.go=$(options.go);
			this.tbody=$(options.tbody);
//			console.log(this.tbody);
			var that=this;
			$.ajax({
				type:"get",
				url:"http://localhost/gulp/ymt/js/index1.json",
				dataType:"json",
				success:function(res){
					that.res=res;
					//渲染数据
					that.display();
					that.init();
				}
			});
			
		}
		display(){
			this.goods = JSON.parse($.cookie("goods"))
			var str = "";
//			console.log(this.res);
//			console.log(this.goods);
			for(var i=0;i<this.res.length;i++){
				for(var j=0;j<this.goods.length;j++){
//					console.log(this.res[i].goodid,this.goods[j].id)
					if(this.res[i].goodid == this.goods[j].id){
					str += `<tr>
								<td><img src="${this.res[i].url}"/></td>
								<td>${this.res[i].name}</td>
								<td>${this.res[i].price}</td>
								<td><input type="number" min="1" value="${this.goods[j].num}"></td>
								<td><em data-index="${this.goods[j].id}">删除</em></td>
							</tr>`

					}
				}
			}
//			console.log(str);
			this.tbody.html(str);
			
		}
		init(){
			var that = this;
			this.tbody.on("click","em",function(){
				var index1 = $(this).attr("data-index")
				that.remove(index1)
				$(this).parent().parent().remove()
			})
			this.tbody.on("input","input",function(){
				var index2 = $(this).parent().next("td").children("em").attr("data-index");
				that.changeCookie(index2,$(this).val())
			})
		}
			
			
//			不封装
		changeCookie(index,n){
			for(var i=0;i<this.goods.length;i++){
				if(this.goods[i].id == index){
					this.goods[i].num = n;
				}
			}
			$.cookie("goods",JSON.stringify(this.goods),{expires:7})
		}
		remove(index){
			for(var i=0;i<this.goods.length;i++){
				if(this.goods[i].id == index){
					this.goods.splice(i,1)
				}
			}
			$.cookie("goods",JSON.stringify(this.goods))
//				this.display()
		}
		
		
		
	}
	return new Car();
})
