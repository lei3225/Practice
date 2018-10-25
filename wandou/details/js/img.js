define(function(){
	
	
//	切换图片
	$(".little-img-item").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var lisrc = $(this).find("img").attr("src");
//    console.log(lisrc)
    $(".big-box").find("img").attr({src:lisrc});
    $(".bigView").find("img").attr({src:lisrc});
})
	//放大镜
    $(".big-box").hover(function(){
        $(".small-box").show();
        $(".bigView").show();
        $(".big-box").mousemove(function(e){
            // 图片内小框
            var [w,h] = [$(".small-box").width(),$(".small-box").height()]
            var [left,top] = [e.offsetX,e.offsetY];
            var [l,t] = [left - w/2,top - h/2];
            if(l < 0){
                l = 0;
            }else if(l > $(this).width() - w){
                l = $(this).width() - w;
            };
            if(t < 0){
                t = 0;
            }else if(t > $(this).height() - h){
                t = $(this).height() - h;
            };
            $(".small-box").css({
                left:l,
                top:t
            })
            // 放大图
            var [boxW,boxH] = [$(".bigView").width(),$(".bigView").height()];
            var [imgW,imgH] = [$(".bigView img").width(),$(".bigView img").height()];
            var [scaleX,scaleY] = [(imgW - boxW) / ($(this).width() - w),(imgH - boxH) / ($(this).height() - h)];
            var [boxL,boxT] = [l * scaleX,t * scaleY];
            $(".bigView img").css({
                left:-boxL,
                top:-boxT
            })
        })
    },function(){
        $(".small-box").hide();
        $(".bigView").hide();
    });




 
    // 显示数量
    function shopCount(){
        var json = cook.get("goodsAdd");
        json = JSON.parse(json);
        var str = 0;
        if(json){
            for(var i = 0; i < json.length; i ++){
                str += json[i].sum * 1;
            };
        };
         if(cook.get("userStatus") && str){
            $(".cart i").html(str);
        }else{
            $(".cart i").html(0);
        };
    };
    shopCount();
    // 加入购物车
    $(".btn-cart").click(function(){
        var id = $(".big-box img").attr("alt");
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
        shopCount();
        new plusOne();
    });

    class plusOne{
        constructor(){
            this.box = $(".btns");
            this.init();
        };
        init(){
	        if(cook.get("userStatus")){
	            this.i = $("<i>+1</i>");
	            this.box.prepend(this.i);
	            this.move();
	        }
        };
        move(){
            var that = this;
            this.i.stop().animate({
                top:-50
            },function(){
                that.i.remove();
            });
        };
    };
});