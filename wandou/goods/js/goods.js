define(function(){
    class list{
        constructor(options){
            this.box = document.querySelector(".goods-list")
            this.bottomPages = document.querySelector(".pagination p")
//          this.prev = document.querySelector(".pagination .prev")
//          this.next = document.querySelector(".pagination .next")
            this.prev = options.prev;
            this.next = options.next;
            this.index = 0;
            this.count = 8;
            this.require();
        };
        
        // 请求数据
        require(){
        	var that = this;
            $.ajax({
                url:"../json/goods.json",
                type:"get",
                dataType:"json",
                success:function(res){
                    that.res = res;
                    that.displayAll();
                    that.click();
                }
            });

//      	var url="../json/goods.json";
//      	var that = this;
//			getAjax(url).then(function(res){
//				that.res = JSON.parse(res);
//          	that.displayAll(res);
//				that.click();
//			})	
        }
        
        displayAll(){
            this.displayGoods();
            this.displayPages();
        };

        // 渲染商品
        displayGoods(){
            var str = "";
	            for(var i = this.count * this.index; i < this.count * this.index + this.count;i++){
	              	if(this.res[i]){
			            str+=`<li class="goods">
								<a href="../details/details.html">
									<div class="img-table">
										<div class="img-table-cell">
											<img src="${this.res[i].sSrc1}" alt="${this.res[i].goodsId}">
										</div>
									</div>
									<div class="goods-slogan">${this.res[i].slogan}</div>
									<div class="goods-title">${this.res[i].name}</div>
									<div class="goods-price">¥${this.res[i].price}</div>
								</a>
								<span class="addCar">加入购物车</span>
							</li>`;
					}
	            }
            this.box.innerHTML=str;
        }

        // 渲染页数
        displayPages(){
            this.maxPages = Math.ceil(this.res.length / this.count);
            this.displayBottomPages();
        };
        
        displayBottomPages(){
            var str = "";
            for(var i = 0; i < this.maxPages; i ++){
                if(i == this.index){
                    str += `<span class="te">${i + 1}</span>`;
                }else{
                    str += `<span>${i + 1}</span>`;
                };
            };
            this.bottomPages.innerHTML=str;

        };


        // 点击事件
        click(){
            var that = this;
            this.prev.click(function(){
                if(that.index > 0){
                    that.index --;
                    that.displayAll();

                }
            });
            
            this.next.click(function(){
                if(that.index < that.maxPages - 1){
                    that.index ++;
                    that.displayAll();

                };
            });
            
            this.bottomPages.onclick = function(e){
            	if(e.target.nodeName == "SPAN"){
            		that.index = e.target.innerHTML - 1;
            		that.displayAll();
            	}
            }
        };    	
     }       	
    

   	new list({
        box:$(".goods-list"),
        bottomPages:$(".pagination p"),
        prev:$(".pagination .prev"),
        next:$(".pagination .next"),
    });
});
					
					
