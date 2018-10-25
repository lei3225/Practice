define(function(){
    class show{
        constructor(options){
            this.smallImg1 = options.smallImg1;
            this.smallImg2 = options.smallImg2;
            this.smallImg3 = options.smallImg3;
            this.showBox = options.showBox;
            this.init();
        };
        init(){
            this.getCookie();
            this.getData();
        };
        getCookie(){
            this.id = cook.get("goodsID");
        };
        getData(){
            var that = this;
            $.ajax({
                url:"../json/details.json",
                dataType:"json",
                success:function(res){
                    that.res = res;
                    that.searchData();
                    that.displayAll();
                }
            });
        };
        searchData(){
            for(var i = 0; i < this.res.length; i ++){
                if(this.id == this.res[i].goodsId){
                    this.index = i;
                };
            };
        };
        displayAll(){
            this.displayImg();
            this.displayDetails();
        };
        displayImg(){
            this.smallImg1.attr({
                src:this.res[this.index].sSrc1,
                alt:this.res[this.index].goodsId
            });
            
            this.smallImg2.attr({
                src:this.res[this.index].sSrc2,
                alt:this.res[this.index].goodsId
            });
            this.smallImg3.attr({
                src:this.res[this.index].sSrc3,
                alt:this.res[this.index].goodsId
            });
            var lisrc = this.smallImg1.attr("src");
            var goodsId = this.smallImg1.attr("alt");
    		$(".big-box").find("img").attr({src:lisrc,alt:goodsId});
   			$(".bigView").find("img").attr({src:lisrc,alt:goodsId});
            
        };
        displayDetails(){
        	var str=`
        	  		<div class="goods-slogan">${this.res[this.index].slogan}</div>
	                <div class="goods-name">${this.res[this.index].name}</div>
	                <div class="goods-sell-point">${this.res[this.index].des}</div>
		            <div class="goods-price">
		                <span class="">价格</span>
		                <span class="unit-icon">¥</span>
		                <span class="final-price">${this.res[this.index].price}</span>
		                <span class="market-price">参考价${this.res[this.index].price}元</span>
		            </div>
		            <div class="btns">
		                <div class="btn-cart">加入购物袋</div>
		            </div>`
            this.showBox.html(str);
        };
    }   
    new show({
        smallImg1:$(".little-img-item .img1"),
        smallImg2:$(".little-img-item .img2"),
        smallImg3:$(".little-img-item .img3"),
        
//      bigImg:$(".bigView img"),
        showBox:$(".product-info-right")
    })
})