require(["../js/tong"]);

////$(".h1").html($.cookie("yonghu"))
//if($.cookie("yonghu")!=null||undefined){
//	$("#login em").html("欢迎尊贵的会员").next().html($.cookie("yonghu"))
//	$(".h2").html("注销")
//}
////console.log($.cookie("yonghu",{path:"/"}))
////console.log($.cookie("yonghu"))

//小二级菜单
$(".gdxx-table").find("li").mouseenter(function () {
    $(this).find("ul").css({
        display:"block"
    }).siblings().find("ul").css({
        display:"none"
    })
})
$(".gdxx-table").find("li").mouseleave(function () {
    $(this).find("ul").css({
        display:"none"
    })
})


//鼠标进入商品框显示红色底部边框
$(".product-list").on("mouseenter",".cont",function () {
    $(this).addClass("active")
})
$(".product-list").on("mouseleave",".cont",function () {
    $(this).removeClass("active")
})






////渲染页面字符串拼接，写到下面的函数里
// var str = "";
// for(var i = 0;i<json.length;i++){
//     str += '<div class="cont">'+
//         '<img src="'+ json[i].src+'">'+
//         '<p>'+ json[i].name+'</p>'+
//         '<span class="pretype">'+
//             '<em>抢</em>'+
//         "幽雅细腻 口感醇和"+
//         '</span>'+
//         '<span class="price">'+
//             '<em>￥</em>'+
//             '<span>'+ json[i].price+'</span>'+
//         '</span>'+
//         '<a class="add">加入购物车</a>'+
//         '<p>'+ json[i].assnum+'</p>'+
//     '</div>'
// }
// $("#box").html(str);


//商品列表
class ShopCar{
    constructor(){
        this.box = $("#box");
        this.load()
    }
    load(){
        var that = this
        $.ajax({
            type:"get",
            url:"../data/goodsInfo.json",
            dataType:"json",
            success:function (res) {
                that.res = res;
//              console.log(that.res) 
                that.display();
                that.init();
            }
        })
    }
    
    
    //{}里的内容引用变量,相当于"++"打断拼接
    display(){
        var str = "";
        this.res.forEach(function (value) {
            str += `<div class="cont" data-id="${value.goodsId}">
	                    <a class="qunimade" href="../html/goodsdetail.html">
	                        <img src="${value.src}"> 
	                        <img class="img1" src="${value.src}"> 
	                    </a>
	                    <p>${value.name}</p>
	                    <span class="pretype">
	                        <em>抢</em>
	                        幽雅细腻 口感醇和
	                    </span>
	                    <span class="price">
	                        <em>￥</em>
	                        <span>${value.price}</span>
	                    </span>
	                    <a class="add">加入购物车</a>
	                    <p>${value.assnum}</p>
                   </div>`
        })
        this.box.html(str);
    }
    init(){
        var that = this;
        $("#box").on("click",".add",function () {
            var index = $(this).parent().attr("data-id");	
            that.setCookie(index);
            
            var l= $(this).parent().offset().left;
		    var t= $(this).parent().offset().top;
		    var L=$(".cart").parentsUntil("body").offset().left;
		    var T =$(".cart").parentsUntil("body").offset().top;
		    	
		    var left=Math.abs(l-L)+"px";
		    var top=Math.abs(t-T)+"px";
		    console.log(left,top)
		    console.log($(this).parent().find(".img1"))
		    $(this).parent().find(".img1").stop().animate({
		    		width:30,height:30,left:-30,top:-30
		    },1000)
					.delay(500).animate({
		    		width:50,heigth:50,left:left,top:top
		    	},500)
					.queue(function(){
		    		$(this).parent().find(".img1").css({
		    			display:"none",
		    			left:0,top:0,width:230,height:230
		    		})
		    	})   	
        })
    }
    
    setCookie(id){
        if(!$.cookie("goods")){
            this.goods = [{"id":id,"num":1}];
        }else {
            var str = $.cookie("goods");
            this.goods = JSON.parse(str);
            var onoff = true;
            for(var i = 0;i<this.goods.length;i++){
                if(this.goods[i].id == id){
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            if (onoff){
                this.goods.push({"id":id,"num":1});
            }
        }
        $.cookie("goods",JSON.stringify(this.goods));
//      console.log($.cookie("goods"));
    }
}
new ShopCar()