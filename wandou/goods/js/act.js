define(function(){
    // a点击事件
    $("main .goods-list .goods a").click(function(){
        var id = $(this).parents("li").find("img").attr("alt")
        cook.set("goodsID",id,{
            path:"/"
        });
    });
    
	class shopCount{
        constructor(){
            this.init();
        };
        init(){
            this.getCookie();
            this.add();
            this.shopCount();
        };
        getCookie(){
            var json = cook.get("goodsAdd");
            this.json = JSON.parse(json);
        };
        shopCount(){
            var str = 0;
            if(this.json){
                for(var i = 0; i < this.json.length; i ++){
                    str += this.json[i].sum * 1;
                };
            };
            if(cook.get("userStatus") && str){
                $(".cart i").html(str);
            }else{
                $(".cart i").html(0);
            };
        };
        add(){
            var that = this;
            // 加入购物车
            $("main .goods-list .goods .addCar").click(function(){
                var id = $(this).parents("li").find("img").attr("alt");
                if(cook.get("userStatus")){
	                if(cook.get("goodsAdd")){
	                    var json = cook.get("goodsAdd");
	                    var arr = JSON.parse(json);
	                    var onOff = 1;
	                    for(var i = 0; i < arr.length; i ++){
	                        if(arr[i].goodsId == id){
	                            onOff = 0;
	                            arr[i].sum ++;
	                        };
	                    };
	                    if(onOff){
	                        arr.push({
	                            goodsId:id,
	                            sum:1
	                        }); 
	                    };
	                    var json = JSON.stringify(arr);
	                    cook.set("goodsAdd",json,{
	                        path:"/"
	                    });
	                }
	                else{
	                    var arr = [];
	                    arr.push({
	                        goodsId:id,
	                        sum:1
	                    });
	                    var json = JSON.stringify(arr);
	                    cook.set("goodsAdd",json,{
	                        path:"/"
	                    });
	                };
	            }else{
	            	window.location.href="../login-register/login.html"
	            }
                that.getCookie();
                that.shopCount();
            });
        };
    };
    new shopCount();
});
